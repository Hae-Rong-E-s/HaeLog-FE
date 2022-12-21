import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURLApi, baseURL } from "../../core/api/axios";

// 입력을하고 -> 상태에 넣고 -> dispatch로 보내는데 미들웨어  THUnk 통신신먼저하고  그 통신의 응답을 받아서 이제 reducer 보내고 그걸 redux 를이용해 관리-> useselector 로 가져닫쓰는

const initialState = {
  comments: [],
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
      return thunkAPI.fulfillWithValue(addComment);
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
      console.log("action:", action.payload.data);
      const commentList = action.payload.data.commentList;
      state.comments = [...commentList];
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
      // => 댓글 추가가 바로 반영되지 않는 문제 때문에
      // 댓글 추가하는 원리가 궁금하다 나는 게시글의 아이디와 바뀐 댓글의 값만 보내주는데
      // 추가한 댓글을 어떻게 리덕스에 업데이트 해야하나? => 댓글을 추가할때 post요청을 하고 요청에 대한 응답으로 받는 것이 업고, payload값은 댓글의 content 하나이고 comments는
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
