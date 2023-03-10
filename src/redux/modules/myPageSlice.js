import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi, instanceApi } from "../../core/api/axios";

const initialState = {
  data: [
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEAm6C-SVkvqJQ4_eMz0_KcL3wTuKHo-wYQ&usqp=CAU",
      description: "한줄 소개 기본값",
      postid: "",
      createAt: "",
      title: "",
      tags: [],
      contentSummary: "",
      nickname: "닉네임 기본값",
      commentCount: "",
    },
  ],
  tags: [],
  description: "",
  isLoading: false,
  error: null,
};

export const __getMyPage = createAsyncThunk(
  "myPage/getMyPage",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await instanceApi.get(`/${payload}`);
      //console.log(payload);
      //console.log("data", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMyPostTag = createAsyncThunk(
  "myPage/getMyPostTag",
  async (payload, thunkAPI) => {
    //console.log("payload", payload.nickname, payload.tag);
    try {
      const data = await instanceApi.get(
        `/${payload.nickname}/post?tag=${payload.tag}`
      );
      //console.log("data", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getInfo = createAsyncThunk(
  "myPage/getInfo",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await baseURLApi.get(`/member/info?nickname=${payload}`);
      //console.log("data", data.data.data.description);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const myPageSlice = createSlice({
  name: "myPage",
  initialState,
  reducers: {},
  extraReducers: {
    //마이페이지 불러오기
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      const myInfo = action.payload;
      const myInfoTag = myInfo.map((row) => row.tags).flat();
      const set = new Set(myInfoTag);
      const uniqueArr = [...set];
      let tagArr = [];
      uniqueArr.map((row, index) => {
        const object = { id: index, tags: row };
        tagArr.push(object);
      });
      //console.log("tagArr", tagArr);
      state.isLoading = false;
      state.tags = tagArr;
      state.data = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //태그에 맞는 게시물 불러오기
    [__getMyPostTag.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPostTag.fulfilled]: (state, action) => {
      // console.log("action", action.payload);
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getMyPostTag.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //회원 가입 후 정보 불러오기
    [__getInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      //console.log(action.payload);
      console.log(state.data);
      state.description = action.payload;
    },
    [__getInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = myPageSlice.actions;
export default myPageSlice.reducer;
