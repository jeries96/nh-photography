export const getTokens = () => {
  const localStorageTokensString = localStorage.getItem("tokens");

  let tokens;
  if (localStorageTokensString) {
    try {
      tokens = JSON.parse(localStorageTokensString);
    } catch (error) {
      console.error("Could not parse session info from local-storage.", error);
    }
  }

  return { tokens };
};

export const makeRequest = (url, method, body = {}) => {
  return fetch(url, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokens().tokens.accessToken
    }
  }).then(response => response.json());
};
