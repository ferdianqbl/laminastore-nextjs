import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes } from "../../services/data-types";

// const decoded = jwtDecode(token); // decode token (example)
export function saveTokenToCookies(token: string) {
  const tokenBase64 = btoa(token); // encode token to base64. token should be string(btoa and atob only work in client side)
  Cookies.set("tkn", tokenBase64, { expires: 1 }); // set token to cookie and expires in 1 day
}

export function getTokenFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("tkn"); // get token from cookie

  if (!tokenBase64) return undefined; // if token is undefined, return empty string

  const token = atob(tokenBase64); // decode token from base64
  return token;
}

export function getToken() {
  const token = getTokenFromCookies(); // get token from cookie
  if (!token) return undefined; // if token is undefined, return empty string
  const decoded: JWTPayloadTypes = jwtDecode(token); // decode token
  return decoded;
}

export function removeTokenFromCookies() {
  Cookies.remove("tkn"); // remove token from cookie
}

export function getTokenFromCookiesAndDecodeForServer(tokenFromServer: string) {
  const token = Buffer.from(tokenFromServer, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(token);
  return payload;
}
