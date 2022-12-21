import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

//초기값
const initialState = {
  detailmainPost: {
    title: "",
    postContent: "",
    tags: [],
    createdAt: "",
    myPost: null,
  },
  isLoading: false,
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

// export const __deleteDatailmain = createAsyncThunk(
//   "detailmainPost/getDetailmain",
//   async ({ payload }, thunkAPI) => {
//     try {
//     } catch (error) {}
//   }
// );

//slice
const detailmainSlice = createSlice({
  name: "detailmainPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailmain.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetailmain.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.detailmainPost = {
        title: action.payload.data.title,
        postContent: action.payload.data.postContent,
        tags: action.payload.data.tags,
        createdAt: action.payload.data.createdAt,
        myPost: action.payload.data.myPost,
      };
    },
    [__getDetailmain.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = detailmainSlice.actions;
export default detailmainSlice.reducer;
