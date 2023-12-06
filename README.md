# NextJS with ParkUI Example 1

Never really finished this example but got the basic menu working.
Seemed a little confusing with just copy and pasting a whole
bunch of code so stepped back to panda css and ark ui.

If you add a `jsxFramework` to `panda.config.ts` make sure to run
`npx panda codegen` inorder to generate the `styled` function in the
`../styled-system/jsx` files.

## Creation History

Created by following the steps at:

- https://panda-css.com/docs/installation/nextjs
- https://youtu.be/FloU4qVsrxY?si=hcZl6hfYRso3e1j_
  - Building a Card Component, finished 12/5/23

```bash
npx create-next-app@latest
cd nextjs-pandacss-ex1/
npm install -D @pandacss/dev
npx panda init --postcss
npm install @ark-ui/react
npm install @park-ui/panda-preset -D
```
