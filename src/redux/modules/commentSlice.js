import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi, baseURL } from "../../core/api/axios";

//초기값 선언
const initialState = {
  comments: [],
  describtion: "",
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
      return thunkAPI.fulfillWithValue(data);
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
      return thunkAPI.rejectWithValue("error");
    }
  }
);
// 댓글 수정
export const __putComment = createAsyncThunk(
  "patchComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { content, commentid } = payload;
    try {
      const data = await baseURLApi.put(`/comment/${commentid}`, content); // data는 무엇이냐? => put요청으로 부터 받는 Response 값이 아닌가? => 그러면 그냥 통신 잘됬다는 메세지?
      return thunkAPI.fulfillWithValue(data);
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
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log("action:", action.payload.data);
      const commentList = action.payload.data.commentList;
      state.comments = [...commentList];
      // state.describtion =action.payload.data.description
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 작성
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.push(action);

      console.log(action);
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
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
      ); // 댓글 삭제 로직 => commentId 체크해보기
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // 댓글 수정
    [__putComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__putComment.fulfilled]: (state, action) => {
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
    [__putComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
