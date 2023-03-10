import axios, { AxiosRequestConfig } from "axios";

export default async function callAPI({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  try {
    const response = await axios({
      url,
      method,
      data,
    });

    const result = {
      error: 0,
      message: "success",
      data: response.data.data,
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
