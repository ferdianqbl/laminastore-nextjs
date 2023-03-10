import callAPI from "../config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const API_VERSION = "api/v1";

export async function postSignUp(data: FormData) {
  const url = `${ROOT_URL}/${API_VERSION}/auth/sign-up`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function postLogin(data: { email: string; password: string }) {
  const url = `${ROOT_URL}/${API_VERSION}/auth/login`;
  return await callAPI({
    url,
    method: "POST",
    data,
  });
}
