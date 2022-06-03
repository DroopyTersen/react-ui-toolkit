export const getClassName = (classNames: string[]) => classNames.filter(Boolean).join(" ");

/** Gets an object's value by a string path */
export const getValue = (obj, path: string, defValue = undefined) => {
  // If path is not defined or it has false value
  if (!path) return undefined;
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  // Find value if exist return otherwise return undefined value;
  return pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj) || defValue;
};

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const checkIsServer = () => {
  return typeof window === "undefined";
};

export const checkIsBrowser = () => !checkIsServer();

export const isIOS = () =>
  checkIsBrowser() && (/iPad|iPhone|iPod/.test(navigatorPlatform) || isIpadOS());

// Newer iPads report as MacIntel (same as MacBook Pro) to provide 'desktop-class browsing'.
// The only way to tell if it is an iPad or MacBook Pro is to check maxTouchPoints (touch enabled or not).
const isIpadOS = () =>
  navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigatorPlatform);

const navigatorPlatform =
  // @ts-ignore
  checkIsBrowser() && (navigator.userAgentData?.platform || navigator.platform);
