import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 입력을하고 -> 상태에 넣고 -> dispatch로 보내는데 미들웨어  THUnk 통신신먼저하고  그 통신의 응답을 받아서 이제 reducer 보내고 그걸 redux 를이용해 관리-> useselector 로 가져닫쓰는

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  msg: "",
};

// export const __getComment = createAsyncThunk(
//   "getComment",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `${process.env.REACT_APP_DB_URL}/post/${payload}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __postComment = createAsyncThunk(
//   "postComment",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     console.log(payload.comment);
//     try {
//       const data = await axios.post(
//         `${process.env.REACT_APP_DB_URL}/comment/${payload.commentId}`,
//         payload
//       );
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // // 댓글 불러오기
    // [__getComment.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getComment.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.comment = action.payload;
    // },
    // [__getComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { __getComment, __postComment } = commentsSlice.actions;
export default commentsSlice.reducer;
