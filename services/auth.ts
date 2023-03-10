import axios from "axios";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const API_VERSION = "api/v1";

export async function postSignUp(data: FormData) {
  try {
    const END_POINT = "auth/sign-up";

    const response = await axios.post(
      `${ROOT_URL}/${API_VERSION}/${END_POINT}`,
      data
    );
    const result = response.data;
    return result.data;
  } catch (error: any) {
    return error.message;
  }
}
