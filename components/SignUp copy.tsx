"use client";

import { Icons } from "@/components/Icons";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { UserSignUpPayload } from "@/lib/validators/sign";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const { mutate: createUser, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: UserSignUpPayload = {
        email: email,
        password: password,
      };

      const { data } = await axios.post("/api/signup", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: "Email already exists.",
            description: "Please choose a different email.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 422) {
          return toast({
            title: "Invalid input form.",
            description: "Please correction your input form signup.",
            variant: "destructive",
          });
        }
      }
      toast({
        title: "There was an error.",
        description: "Could not register.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`);
    },
  });

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
      </div>
      <div>
        <form action="">
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button disabled={isLoading} onClick={() => createUser()}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign Up
            </Button>
          </div>
        </form>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already a Starter?{" "}
        <Link
          href="/signin"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Sign In
        </Link>
      </p>
      <p className="text-center text-sm max-w-xs mx-auto">
        By continuing, you are setting up a Starter account and agree to our
        User Agreement and Privacy Policy.
      </p>
    </div>
  );
};

export default SignUp;
