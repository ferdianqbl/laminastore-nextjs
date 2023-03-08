import axios from "axios";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const API_VERSION = 'api/v1';

export async function getFeaturedGame() {
  const END_POINT = 'players/landing-page';
  const response = await axios.get(`${ROOT_URL}/${API_VERSION}/${END_POINT}`);
  const result = response.data;
  return result.data;
}