import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  data: [
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEAm6C-SVkvqJQ4_eMz0_KcL3wTuKHo-wYQ&usqp=CAU",
      description: "",
      postId: "",
      createAt: "",
      title: "",
      tags: [""],
      contentSummary: "",
      nickname: "",
      commentCount: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const __getMyPage = createAsyncThunk(
  "myPage/getMyPage",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/post/user/${payload}`);
      console.log("payload", payload);
      return thunkAPI.fulfillWithValue(data.data);
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
      state.isLoading = false;
      state.plans = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = myPageSlice.actions;
export default myPageSlice.reducer;
