import type {} from "vite";

const getSessionOverride = (key) => sessionStorage.getItem(key);

declare global {
  interface ImportMetaEnv {
    VITE_DOG_API_KEY: string;
    VITE_CAT_API_KEY: string;
    VITE_APP_INSIGHTS_KEY: string;
    VITE_ENV: Environment;
    // more env variables...
  }
}

export const config = import.meta.env;
