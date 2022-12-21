import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi } from "../../core/api/axios";

const initialState = {
  editPost: {
    title: "",
    tags: [],
    tag: "",
    content: "",
  },
  putResult: null,
  postResult: null,
  error: null,
  nickname: "",
};

// 수정내용 get 받아오기
export const __getEditPost = createAsyncThunk(
  "editPost/getEditPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(`/post/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 수정내용 put 하기
export const __putEditPost = createAsyncThunk(
  "editPost/putEditPost",
  async ({ payload: { postId, editForm } }, thunkAPI) => {
    try {
      const { data } = await baseURLApi.put(`/post/${postId}`, editForm);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 새로운 내용 post하기
export const __postPost = createAsyncThunk(
  "editPost/postPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await baseURLApi.post("/post", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// slice
const editPostSlice = createSlice({
  name: "editPost",
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
    // 수정할 내용 받아오기
    [__getEditPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getEditPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.editPost = {
        title: action.payload.title,
        tags: action.payload.tags,
        content: action.payload.content,
      };
      state.nickname = action.payload.nickname;
    },
    [__getEditPost.rejected]: (state) => {
      state.isLoading = false;
      // 수정하기
    },
    [__putEditPost.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.putResult = "success";
        state.nickname = action.payload.nickname;
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__putEditPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.msg);
    },
    // 새로운 내용 포스트하기
    [__postPost.fulfilled]: (state, action) => {
      alert(action.payload.msg);
    },
    [__postPost.rejected]: (state, action) => {
      console.log(action.payload.msg);
    },
  },
});

export const { changeField, initializeForm } = editPostSlice.actions;
export default editPostSlice.reducer;
