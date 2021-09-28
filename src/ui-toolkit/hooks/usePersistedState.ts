import { useEffect, useState } from "react";

export const usePersistedState = <T>(
  defaultValue: T,
  key: string,
  storage = window.localStorage
) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const cachedValue = storage.getItem(key);
      if (!cachedValue) return defaultValue;
      try {
        return JSON.parse(cachedValue);
      } catch (err) {
        // Unable to parse the JSON, must be a string?
        return cachedValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    const valueStr = typeof value === "string" ? value : JSON.stringify(value);
    storage.setItem(key, valueStr);
    // eslint-disable-next-line
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};
