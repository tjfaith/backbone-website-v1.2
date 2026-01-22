export const getUserCountryClient = () => {
  return document?.cookie
    .split("; ")
    .find((row) => row.startsWith("user-country="))
    ?.split("=")[1];
};
