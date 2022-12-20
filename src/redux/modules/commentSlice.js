import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

// 입력을하고 -> 상태에 넣고 -> dispatch로 보내는데 미들웨어  THUnk 통신신먼저하고  그 통신의 응답을 받아서 이제 reducer 보내고 그걸 redux 를이용해 관리-> useselector 로 가져닫쓰는

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      // const data = await instance.get(
      //   `?nickname=${payload.nickname}&postid=${payload.postId}`
      // );
      const data = await instance.get(`/post/${payload.postId}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const __patchComment = createAsyncThunk(
  "patchComment",
  async (payload, thunkAPI) => {
    const { editComment, commentId } = payload;
    try {
      const data = await instance.patch(`/comment/${commentId}`, editComment);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { addComment, commentId } = payload;

    try {
      const data = await instance.post(
        `/post/${commentId}/comment`,
        addComment
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // // 댓글 불러오기
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log("action:", action.payload.data);
      const commentList = action.payload.data.commnetList;
      state.comments = [...commentList];
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 작성
    [__postComment.pending]: (state) => {
      console.log(state);
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(action.payload.data.msg);
      console.log("state:", state);
      console.log("action:", action);
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(state, action);
      state.error = action.payload;
    },
    // 댓글 삭제
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.commentId !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // 댓글 수정
    [__patchComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...state,
            commentContent: action.payload.comment,
          };
        }
      });
    },
    [__patchComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
