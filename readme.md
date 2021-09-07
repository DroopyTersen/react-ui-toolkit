# React TypeScript SPA w/ Vite

- [x] [Create Vite Project](#create-vite-project)
- [x] [Setup Aliases](#setup-aliases)
- [x] [Setup Global Types](#setup-global-types)
- [x] Setup Bootstrap CSS
- [ ] Setup React Router
- [ ] Setup .env

## Create Vite Project

Running the following will ask you the project name and create a new folder with that name.

```
npm init vite
```

## Setup Aliases

In `tsconfig.json` set the paths

```json
{
  "compilerOptions": {
    "paths": {
      "~global/*": ["./src/global/*"],
      "~common/*": ["./src/common/*"],
      "~components/*": ["./src/components/*"],
      "~hooks/*": ["./src/hooks/*"],
      "~features/*": ["./src/features/*"]
    },
  ...
  }
}
```

In `vite.config.ts` setup the `resolve.alias`

```ts
import { defineConfig } from "vite";
import * as path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";

export const viteAliases = {
  "~common": path.resolve(__dirname, "./src/common"),
  "~hooks": path.resolve(__dirname, "./src/hooks"),
  "~components": path.resolve(__dirname, "./src/components"),
  "~features": path.resolve(__dirname, "./src/features"),
  "~global": path.resolve(__dirname, "./src/global"),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: viteAliases },
  plugins: [reactRefresh(), visualizer()],
});
```

## Setup global types

Create a file at `src/types/global.d.ts` and add any global types/interfaces inside the `declare global { }` block.

```ts
export {};

declare global {
  type Environment = "LOCAL" | "DEV" | "UAT" | "PROD";

  type Role = "admin" | "user";

  interface User {
    id: string;
    name: string;
    role?: Role;
    isImpersonation: boolean;
  }

  interface LookupValue {
    id: string;
    text: string;
  }

  type ValidationStatus = "none" | "valid" | "invalid";
}
```

## Setup Bootstrap CSS

If you aren't going to create a custom theme, the easiest way is to just link to the CDN inside of `index.html`.

Otherwise, to create a theme you need to setup SASS variables and compile bootstrap as part of your build process.

First install `bootstrap`.

```
npm install bootstrap
```

Next create the following files:

```
/src
  /styles
     global.scss
     theme.scss
```

Inside of `global.scss` put in the following

```scss
@import "./theme.scss";

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
```

Inside of `/src/styles/theme.scss` put in the following. Feel free to delete the commented code, it is there to help you build a custom theme.

```scss
$theme-colors: (
  "primary": #8a2287,
  // "secondary": $secondary,
  // "success": $success,
  // "info": $info,
  // "warning": $warning,
  // "danger": $danger,
  // "light": $light,
  // "medium": $medium,
  // "dark": $dark,,
);
// $grid-breakpoints: (
//   xs: 0,
//   sm: 576px,
//   md: 768px,
//   lg: 992px,
//   xl: 1200px,
//   xxl: 1600px,
// );
// $spacer: 2rem;
// $mobile-spacer: 1rem;
```

Import `global.scss` into `global/app.tsx`

```ts
import "../styles/global.scss";
```
