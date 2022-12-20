import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";
// import { useNavigate } from "react-router-dom";

//초기값 설정
const initialState = {
  login: {
    loginId: "",
    password: "",
  },
  result: null,
  error: null,
  nickname: null,
};

// thunk
export const __postLogin = createAsyncThunk(
  "login/postLogin",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`/member/login`, payload);
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
    [__postLogin.fulfilled]: (state, action) => {
      // 백에 수정 요청 필요 요청!!!
      // nickname 안들어옴
      console.log(action.payload);

      if (action.payload.result === "success") {
        state.result = "success";
        state.nickname = action.payload.data.nickname;
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
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
