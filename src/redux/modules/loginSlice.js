import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

//초기값 설정
const initialState = {
  login: {
    username: "",
    password: "",
  },
  error: null,
  isLoading: false,
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
    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state);
      alert(state.msg);
    },
  },
});

// 컴포넌트 사용을 위해 export
export const { changeField, initializeForm } = loginSlice.actions;
// configStore에 등록하기 위해 export default
export default loginSlice.reducer;
