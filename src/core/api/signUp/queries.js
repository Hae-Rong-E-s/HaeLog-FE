import { instance } from "../axios";

export const postCheckUsername = async (post) => {
  try {
    //post url 수정 필요
    const data = await instance.post("/member/singup", post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const postCheckNickname = async (post) => {
  try {
    //post url 수정 필요
    const data = await instance.post("/member/singup", post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
