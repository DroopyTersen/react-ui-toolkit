export {};
/** Example Global Types commonly found in Single Page Apps */

declare global {
  type Environment = "LOCAL" | "DEV" | "UAT" | "PROD";

  interface LookupValue {
    id: string;
    text: string;
  }

  type Role = "admin" | "user";

  interface User {
    id: string;
    name: string;
    role?: Role;
    isImpersonation: boolean;
  }
}
