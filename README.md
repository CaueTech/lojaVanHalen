This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Concept: a landing page for a fictional Guitar Store called "Van Halen".
- It has a Mobile First design.
- It uses tailwind classes for style.
- It has an API implementation based on routes and .json returns.

## Getting Started

ESSENTIAL!
Before running the project, make sure to run in the terminal inside the project folder:
```npm install next```
(IF NOT ALREADY INSTALLED).

Then, run the development server:

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

## DISCLAIMER

If the localhost is NOT started in the port 3000, it MIGHT generate errors for the API routine (since the fetch is configured to the 3000 port), so
MAKE SURE the localhost is running in the 3000 port OR change the body.js fetch to the current port.