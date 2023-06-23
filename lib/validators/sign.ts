import { z } from "zod";

export const SignInValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export const SignUpValidator = z
  .object({
    name: z
      .string()
      .min(8, { message: "minimum 8 character" })
      .max(32, { message: "maximum 32 character" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type UserSignInPayload = z.infer<typeof SignInValidator>;
export type UserSignUpPayload = z.infer<typeof SignUpValidator>;
