"use client";

import { User } from "@prisma/client";
import { UserSettingValidator } from "@/lib/validators/settings";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface UserSettingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "username" | "bio">;
}

type FormData = z.infer<typeof UserSettingValidator>;

export function SettingForm({
  user,
  className,
  ...props
}: UserSettingFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSettingValidator),
    defaultValues: {
      name: user?.username || "",
      bio: user?.bio || "",
    },
  });

  const { mutate: updateSetting, isLoading } = useMutation({
    mutationFn: async ({ name, bio }: FormData) => {
      const payload: FormData = { name, bio };

      const { data } = await axios.patch(`/api/setting/`, payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: "Username already taken.",
            description: "Please choose another username.",
            variant: "destructive",
          });
        }
      }

      return toast({
        title: "Something went wrong.",
        description: "Your profile was not updated. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        description: "Your profile has been updated.",
      });
      router.refresh();
    },
  });

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit((e) => updateSetting(e))}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Think of the summary as a snapshot of your skills, accomplishments,
            and knowledge and Please enter a display name you are confortable.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="name" size={32} {...register("name")} />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Type your bio here."
                {...register("bio")}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button isLoading={isLoading}>Update</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
