export const parseQuery = (queryString: string): { [key: string]: string } => {
  const query = {};
  const pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

export const addQueryParams = (url = "", params: { [key: string]: string | number } = {}) => {
  if (!params) {
    return url;
  }
  const querystring = new URLSearchParams(params as any).toString();
  const prefix = url.indexOf("?") > -1 ? "&" : "?";
  return url + prefix + querystring;
};
