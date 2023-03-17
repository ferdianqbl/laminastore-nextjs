import callAPI from "../config/api";

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

export async function getMemberTransactions() {
  const url = `${ROOT_URL}/${API_VERSION}/players/history`;
  return await callAPI({
    url,
    method: "GET",
    token: true,
  });
}
