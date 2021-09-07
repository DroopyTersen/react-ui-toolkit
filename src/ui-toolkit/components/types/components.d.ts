export {};

declare global {
  type ValidationStatus = "none" | "valid" | "invalid";

  type ThemeColor =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
