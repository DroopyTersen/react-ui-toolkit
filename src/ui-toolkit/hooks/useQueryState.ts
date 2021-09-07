import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useQueryParams<Key extends string>(keys: Key[]) {
  const { search } = useLocation();
  return parseQuerystring(search, keys);
}

export function useQueryState(key: string, defaultValue = "", replaceHistory = true) {
  let navigate = useNavigate();
  let { search, pathname } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
  let value = urlSearchParams.get(key) || defaultValue;

  const setValue = useCallback(
    (val: string) => {
      let urlSearchParams = new URLSearchParams(search);
      urlSearchParams.set(key, val);
      let queryString = urlSearchParams.toString();
      let url = pathname;
      if (queryString) url += "?" + queryString;
      navigate(url, { replace: replaceHistory });
    },
    [key, search]
  );

  return [value, setValue] as [string, (val: string) => void];
}

function parseQuerystring<Key extends string>(search: string, keys: string[]) {
  const urlSearchParams = new URLSearchParams(search);
  let params = keys.reduce((obj, key) => {
    let val = urlSearchParams.get(key);
    if (val + "" !== "") {
      obj[key + ""] = urlSearchParams.get(key);
    }
    return obj;
  }, {});
  return params as {
    [K in Key]: string;
  };
}
