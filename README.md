# Next Stater Template - Modern Web Template

Built with the Next.js App Router, TypeScript, Tailwind CSS, Prisma and Shadcn UI.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) include ORM.

## Getting Started

To get started with this project, run

```bash
  git clone -b starter-code https://github.com/gmsetiawan/next-starter-template.git
```

and copy these .env.example variables into a separate .env file:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=1234567890

SECRET_KEY=

NODE_ENV=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=

JWT_SESSION_ERROR=
```

First, run the development server:

```bash
npm install
# then
npx prisma init
# then
npx prisma migrate dev --name init
# then
npm run dev
# or
yarn dev
# or
pnpm dev
```

and that's all you need to get started project! 🚀

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the projects by modifying all page in route `app`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - learn about NextAuth features authentication.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation) - a utility-first CSS framework.
- [Prisma Documentation](https://www.prisma.io/docs) - prisma is an open-source ORM.
- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - re-usable components built using Radix UI and Tailwind CSS..

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# next-starter-template
