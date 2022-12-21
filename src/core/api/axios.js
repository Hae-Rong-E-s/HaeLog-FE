import axios from "axios";
import { serverUrl } from ".";
import { serverUrlApi } from ".";
import { useCookies } from "react-cookie";

// 헤더 없이 사용하는 경우
export const instanceAPI = axios.create({
  baseURL: serverUrlApi,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우
export const baseURLAPI = axios.create({
  baseURL: serverUrlApi,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 없이 사용하는 경우
export const instance = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우
export const baseURL = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// interceptors를 통해 토큰값을 보내주는 것에 사용
// 쿠키에 토큰 값 넣기
baseURL.interceptors.request.use((config) => {
  // 쿠키 훅
  const [cookies] = useCookies(["id"]);
  if (config.headers === undefined) return;
  const token = cookies.id;
  console.log(token);
  // const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
