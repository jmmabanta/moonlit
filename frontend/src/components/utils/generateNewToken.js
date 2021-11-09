// From: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
export const generateNewToken = (res) => {
  let timing = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newResponse = await res.reloadAuthResponse();
    timing = (newResponse.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, timing);
  };
  setTimeout(refreshToken, timing);
};
