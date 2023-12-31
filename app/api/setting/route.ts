import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { UserSettingValidator } from "@/lib/validators/settings";
import { z } from "zod";

export async function PATCH(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorize", { status: 401 });
    }

    const body = await req.json();
    const { name, bio } = UserSettingValidator.parse(body);

    // check if username is taken
    const username = await prisma.user.findFirst({
      where: {
        username: name,
      },
    });

    if (username && username.id !== session.user.id) {
      return new Response("Username is taken", { status: 409 });
    }

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username: name,
        bio: bio,
      },
    });

    return new Response("OK");
  } catch (error) {
    error;

    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not update profile at this time. Please try later",
      { status: 500 }
    );
  }
}
