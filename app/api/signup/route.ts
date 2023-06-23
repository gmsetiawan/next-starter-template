import { prisma } from "@/lib/db";
import { SignUpValidator } from "@/lib/validators/sign";
import { z } from "zod";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = SignUpValidator.parse(body);

    const emailExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExist) {
      console.log("Email already exists");
      return new Response("Email already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return new Response("Register successffully", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not register at this time. Please try later", {
      status: 500,
    });
  }
}
