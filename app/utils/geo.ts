export function getUserCountryClient() {
  if (typeof document === "undefined") return null;

  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("user-country="))
    ?.split("=")[1];
}
