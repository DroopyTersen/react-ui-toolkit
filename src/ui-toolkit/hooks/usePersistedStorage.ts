import { useCallback, useMemo, useState } from "react";

export const usePersistedStorage = <T>(
  defaultValue: T,
  key: string,
  storage = window.localStorage
) => {
  const [lastReadTime, setLastReadTime] = useState(new Date());

  const value = useMemo<T>(
    () => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, storage, lastReadTime]
  );

  const setValue = useCallback(
    (value: T) => {
      const valueStr = typeof value === "string" ? value : JSON.stringify(value);
      storage.setItem(key, valueStr);

      setLastReadTime(new Date());
    },
    [key, storage]
  );

  return [value, setValue] as [T, typeof setValue];
};
