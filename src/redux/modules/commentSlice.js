import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi, baseURL } from "../../core/api/axios";

//초기값 선언
const initialState = {
  comments: [],
  describtion: "",
  postMemberNickname: "",
  isLoading: false,
  error: null,
};
// 댓글 조회
export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get(
        `api?nickname=${payload.nickname}&postid=${payload.postId}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글등록
export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    const { addComment, postId } = payload;

    try {
      const data = await baseURLApi.post(`/comment/${postId}`, addComment);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글 삭제
export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    try {
      await baseURLApi.delete(`/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글 수정
export const __putComment = createAsyncThunk(
  "patchComment",
  async (payload, thunkAPI) => {
    const { content, commentid } = payload;
    try {
      const data = await baseURLApi.put(`/comment/${commentid}`, content);
      return thunkAPI.fulfillWithValue(commentid, content);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// reducer
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const commentList = action.payload.data.commentList;
      state.comments = [...commentList];
      state.describtion = action.payload.data.description;
      state.postMemberNickname = action.payload.data.postMemberNickname;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    // 댓글 작성
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload.data];
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    // 댓글 삭제
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state?.comments.filter(
        (comment) => comment.commentId !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    // 댓글 수정
    [__putComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) => {
        if (comment.commentId === action.meta.arg.commentid) {
          return {
            ...comment,
            commentContent: action.meta.content,
          };
        }
      });
    },
    [__putComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
