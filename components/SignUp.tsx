"use client";

import { Icons } from "@/components/Icons";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { SignUpValidator } from "@/lib/validators/sign";

const SignUp = () => {
  const { toast } = useToast();

  const {
    register,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(SignUpValidator),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!data) return null;

    const res = await signIn("credentials", {
      name: data.name,
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });

    if (res?.ok && data) {
      toast({
        title: "Welcome",
        description: `Hi, nice to meet you ${data.name} `,
        variant: "default",
      });
    }
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
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Fullname
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="John Doe"
                autoCapitalize="none"
                autoCorrect="off"
                {...register("name")}
              />
              {errors?.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                autoCapitalize="none"
                autoCorrect="off"
                {...register("password")}
              />
              {errors?.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="password"
                autoCapitalize="none"
                autoCorrect="off"
                {...register("confirmPassword")}
              />
              {errors?.confirmPassword && (
                <p className="text-xs text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button disabled={isLoading} type="submit">
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
