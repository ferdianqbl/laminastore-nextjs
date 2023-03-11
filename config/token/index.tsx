import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// const decoded = jwtDecode(token); // decode token (example)
export function saveTokenToCookies(token: string) {
  const tokenBase64 = btoa(token); // encode token to base64. token should be string
  Cookies.set("tkn", tokenBase64, { expires: 1 }); // set token to cookie and expires in 1 day
}

export function getTokenFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("tkn"); // get token from cookie

  if (!tokenBase64) return ""; // if token is undefined, return empty string

  const token = atob(tokenBase64!); // decode token from base64
  return token;
}

export function decodeToken() {
  const token = getTokenFromCookies(); // get token from cookie
  const decoded = jwtDecode(token); // decode token
  return decoded;
}

export function removeTokenFromCookies() {
  Cookies.remove("tkn"); // remove token from cookie
}
