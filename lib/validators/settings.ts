import { z } from "zod";

export const UserSettingValidator = z.object({
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-zA-Z0-9_]+$/),
  bio: z
    .string()
    .min(3)
    .max(256, { message: "Must be 256 or fewer characters long" }),
});
