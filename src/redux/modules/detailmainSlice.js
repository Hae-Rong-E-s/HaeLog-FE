import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../core/api/axios";

//초기값 설정
const initialState = {
  detailmainPost: {
    title: "",
    postContent: "",
    tags: [],
    createdAt: "",
    myPost: null,
  },
  error: null,
};

//thunk
export const __getDetailmain = createAsyncThunk(
  "detailmainPost/getDetailmain",
  async ({ nickname, postId }, thunkAPI) => {
    try {
      const { data } = await baseURL.get(
        `/api?nickname=${nickname}&postid=${postId}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const detailmainSlice = createSlice({
  name: "detailmainPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailmain.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.detailmainPost = {
        title: action.payload.data.title,
        postContent: action.payload.data.postContent,
        tags: action.payload.data.tags,
        createdAt: action.payload.data.createdAt,
        myPost: action.payload.data.myPost,
      };
    },
    [__getDetailmain.rejected]: (state, action) => {
      state.error = action.payload.msg;
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      alert(action.payload.response.data.msg);
    },
  },
});

export const {} = detailmainSlice.actions;
export default detailmainSlice.reducer;
