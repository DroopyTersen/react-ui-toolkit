import React from "react";

import useAsyncData from "../../hooks/useAsyncData";

export const AsyncData = <T extends unknown>(props: AsyncDataProps<T>) => {
  const { data, error, isLoading } = useAsyncData(props.asyncFn, props.params, null);
  console.log("🚀 | data", data);

  if (error) {
    return (
      <div>
        <h3>Error!</h3>
        <pre>{JSON.stringify(error, null, 3)}</pre>
      </div>
    );
  }
  if (isLoading) {
    return props.loading || <Loading />;
  }

  if (data !== null) {
    return props.children(data);
  }

  return null;
};

interface AsyncDataProps<T> {
  asyncFn: (...args) => Promise<T>;
  params: any[];
  children: (data: T) => JSX.Element;
  loading?: JSX.Element;
}

export const Loading = () => {
  return (
    <div className="text-center p-4">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
