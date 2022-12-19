import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

//초기값
const initialState = {
  signUp: {
    loginId: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    description: "",
  },
  error: null,
  result: null,
  isLoginIdValid: false,
  isNicknameValid: false,
};

// thunk
export const __postSignUp = createAsyncThunk(
  "signUpPost/postSignUp",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/member/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("회원가입에 실패하였습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCheckId = createAsyncThunk(
  "signUpPost/postCheckId",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/member/signup/loginId", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCheckNickname = createAsyncThunk(
  "signUpPost/postCheckNickname",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/member/signup/nickname", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const signUpSlice = createSlice({
  name: "signUpPost",
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
    [__postSignUp.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__postSignUp.rejected]: (state, action) => {
      // 통신 오류 값 정리
      console.log(action.payload.msg);
    },
    // 아이디 체크
    [__postCheckId.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        state.isLoginIdValid = true;
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__postCheckId.rejected]: (state, action) => {
      // 통신 오류 값 정리
      console.log(action.payload.msg);
    },
    // 닉네임 체크
    [__postCheckNickname.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        state.isNicknameValid = true;
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__postCheckNickname.rejected]: (state, action) => {
      // 통신 오류 값 정리
      console.log(action.payload.msg);
    },
  },
});

export const { changeField, initializeForm } = signUpSlice.actions;
export default signUpSlice.reducer;
