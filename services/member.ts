import callAPI from "../config/api";
import { UserTypes } from "./data-types";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const API_VERSION = "api/v1";

export async function getDashboard() {
  const url = `${ROOT_URL}/${API_VERSION}/players/dashboard`;
  return await callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactions(requestParams?: string) {
  let params = "";
  if (requestParams && requestParams === "all") params = "";
  else if (requestParams) params = `?status=${requestParams}`;

  const url = `${ROOT_URL}/${API_VERSION}/players/history/${params}`;
  return await callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getDetailTransaction(id: string, serverToken: string) {
  const url = `${ROOT_URL}/${API_VERSION}/players/history/${id}/detail`;
  return await callAPI({
    url,
    method: "GET",
    serverToken,
  });
}

export async function putEditProfile(data: UserTypes | FormData) {
  const url = `${ROOT_URL}/${API_VERSION}/players/profile`;
  return await callAPI({
    url,
    method: "PUT",
    token: true,
    data,
  });
}
