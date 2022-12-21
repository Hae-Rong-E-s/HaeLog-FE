import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api/axios";

//초기값 설정
const initialState = {
  login: {
    loginId: "",
    password: "",
  },
  result: null,
  error: null,
  // nickname: "test",
};

// thunk
export const __postLogin = createAsyncThunk(
  "login/postLogin",
  async (payload, thunkAPI) => {
    try {
      const { headers, data } = await instanceApi.post(
        `/member/login`,
        payload
      );
      // console.log(headers);
      // accesstoken 확인
      document.cookie = `id = ${headers.authorization}`;
      // localStorage.setItem("id", headers.Authorization);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      // error 처리 해주기
      alert("로그인에 실패하였습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  extraReducers: {
    [__postLogin.rejected]: (state, action) => {
      // 통신 오류 값 정리
      console.log(action.payload.msg);
    },
  },
});

// 컴포넌트 사용을 위해 export
export const { changeField, initializeForm } = loginSlice.actions;
// configStore에 등록하기 위해 export default
export default loginSlice.reducer;
