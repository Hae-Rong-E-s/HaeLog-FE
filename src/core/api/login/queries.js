import { instance, baseURL } from "../axios";

export const postLogin = async (post) => {
  try {
    //post url 수정 필요
    const data = await baseURL.post("/member/login", post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
