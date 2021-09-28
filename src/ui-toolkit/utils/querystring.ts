export const querystring = {
  parse: (queryString: string) => {
    if (!queryString) return {};

    let searchParams = new URLSearchParams(queryString);
    let params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  },
  stringify: (params: { [key: string]: any }) => {
    let searchParams = new URLSearchParams(params);
    return searchParams.toString();
  },
  append: (url: string, params: { [key: string]: any }) => {
    if (!params) {
      return url;
    }
    const querystring = new URLSearchParams(params as any).toString();
    const prefix = url.indexOf("?") > -1 ? "&" : "?";
    return url + prefix + querystring;
  },
};
