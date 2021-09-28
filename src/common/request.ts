export const jsonRequest = async (url, { body = null, method = "GET", headers = {} } = {}) => {
  let options: Partial<RequestInit> = {
    method,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  let resp = await fetch(url, options);
  if (!resp.ok) {
    let responseText = await resp.text();
    try {
      let parsedError = JSON.parse(responseText);
      console.error("Request Error", parsedError);
      throw parsedError;
    } catch (_) {}
    console.error("Request Error", resp.status, responseText);
    throw new Error(`Request Error: ${responseText}`);
  }
  return resp.json();
};
