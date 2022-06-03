/*
let { data, isLoading, error} = useAsyncData<NewsPages[]>([], getNews, [siteUrl, maxItems]);
*/
import { useEffect, useReducer, useRef } from "react";

export interface AsyncDataState<T> {
  /** Indicates whether the asyncFn is done yet */
  isLoading: boolean;
  /** Whatever your asncFn returns, assuming it succeeds */
  data: T;
  /** The error message if the asyncFn errors */
  error: string;
}

function reducer<T>(state: AsyncDataState<T>, action: any) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isLoading: true,
        data: action.data || state.data || null,
        error: "",
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: "",
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "replace":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: "",
      };
    default:
      return state;
  }
}

export function useAsyncData<T>(asyncFn: (...args) => Promise<T>, args: any[], initialValue: T) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: "",
    data: initialValue,
  });

  const asyncFnRef = useRef(asyncFn);

  useEffect(() => {
    asyncFnRef.current = asyncFn;
  });

  useEffect(() => {
    let isUnmounted = false;
    const doAsync = async () => {
      try {
        dispatch({ type: "start", data: initialValue });
        const data = await asyncFnRef.current(...args);
        if (isUnmounted) return;
        dispatch({ type: "success", data });
      } catch (err) {
        dispatch({ type: "error", error: err });
      }
    };
    doAsync();
    return () => {
      isUnmounted = true;
    };
    // eslint-disable-next-line
  }, args);

  return {
    ...(state as AsyncDataState<T>),
    replace: (data: T) => dispatch({ type: "replace", data }),
  };
}
