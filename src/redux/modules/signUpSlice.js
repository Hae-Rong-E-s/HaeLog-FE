import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

// thunk
export const __postSignUp = createAsyncThunk(
  "signUpPost/postSignUp",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/member/signup", payload);
      return data;
    } catch (error) {
      alert("회원가입에 실패하였습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//초기값
const initialState = {
  // signUp: { username: "", password: "", nickname: "", dies: "" },
  // isLoading: false,
  result: null,
  msg: null,
  error: null,
};

//slice
const signUpSlice = createSlice({
  name: "signUpPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__postSignUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__postSignUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.signUp = {
      //   title: action.payload.username,
      //   password: action.payload.password,
      //   nickname: action.payload.nickname,
      //   dies: action.payload.dies,
      // };
      state.result = action.payload.result;
      state.msg = action.payload.msg;
    },
    [__postSignUp.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
