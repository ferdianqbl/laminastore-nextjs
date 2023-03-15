import axios, { AxiosRequestConfig } from "axios";
import { getTokenFromCookies } from "../token";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  try {
    let headers = {};
    if (token) {
      const JWTToken = getTokenFromCookies();
      if (!JWTToken) throw new Error("Token not found");
      headers = {
        Authorization: `Bearer ${JWTToken}`,
      };
    }

    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    const resultLength = Object.keys(response.data).length;
    const result = {
      error: 0,
      message: "success",
      data: resultLength > 1 ? response.data : response.data.data,
    };
    return result;
  } catch (error: any) {
    const result = {
      error: 1,
      message: error.response.data.message,
      data: null,
    };
    return result;
  }
}
