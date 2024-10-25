# My Personal Website

Hi, you've reached the source code of my personal website. 

I'd be happy to take constructive criticism from anyone that bothers to actually read the code.

The site was built using Next.JS. I actually quite like the dev experience with Next.JS, minus the lack of helpful error messages. But... my first language was Clojure and my first web-framework was Luminus, so I'm sort of used to it. 

I'm using ShadCN for UI components. I really like their stuff. It makes it easy on me, and since the code for each component lives in the repo, I can modify them as needed.

There's a lot of 'use client' in this version of the website. I'm not sure how to
get the typewriter effects or the render-on-scroll behavior without it. But I tried
to include a static (server-side rendered) version of the blog, resume, and about-me pages.

I'm probably going to deploy on Vercel, just to try it. I think there's a lot of value in the whole proposition.

The rest of this document is Next.JS boilerplate. It all still works. Just make sure
to install dependencies first: `pnpm i`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
