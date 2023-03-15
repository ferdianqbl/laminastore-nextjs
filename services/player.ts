import axios from "axios";
import callAPI from "../config/api";
import { CheckoutTypes } from "./data-types";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const url = `${ROOT_URL}/${API_VERSION}/players/landing-page`;
  return await callAPI({
    url,
    method: "GET",
  });
}

export async function getFeaturedGameDetail(id: string) {
  const url = `${ROOT_URL}/${API_VERSION}/players/${id}/detail`;
  return await callAPI({
    url,
    method: "GET",
  });
}

export async function getGameCategories() {
  const url = `${ROOT_URL}/${API_VERSION}/players/category`;

  return await callAPI({
    url,
    method: "GET",
  });
}

export async function postCheckout(data: CheckoutTypes) {
  const url = `${ROOT_URL}/${API_VERSION}/players/checkout`;
  return await callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
