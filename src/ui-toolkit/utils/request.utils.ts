export type RequestOptions = Partial<RequestInit>;

export const JSON_DEFAULTS: RequestOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
};
/**
 * Smartly merges RequestInit properties.
 * It merges the headers separately so you don't blow away the default headers
 * If you need to delete a header that is coming from a default, set that header to an empty string.
 */
export const mergeRequestOptions = (
  defaults: RequestOptions,
  overrides: RequestOptions
): RequestOptions => {
  let options = {
    ...defaults,
    ...overrides,
    headers: {
      ...defaults?.headers,
      ...overrides?.headers,
    },
  };

  // When posting multipart/form-data, you apparently
  // can't set a content type header yourself, browser needs
  // to do it. Allow the override to remove the header by
  // setting it to blank
  if (options.headers["content-type"] === "") {
    delete options.headers["content-type"];
  }
  return options;
};

export async function jsonRequest<T = any>(
  url: string,
  options?: Partial<RequestInit>
): Promise<T> {
  let reqOptions = mergeRequestOptions(JSON_DEFAULTS, options);

  const resp = await fetch(url, reqOptions);
  if (resp.ok) {
    return resp.json() as Promise<T>;
  } else {
    let respBody = await resp.text();
    throw new Error(`Req Error: ${resp.status} - ${resp.statusText} - ${respBody}`);
  }
}
