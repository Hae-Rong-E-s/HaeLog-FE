import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import editPost from "../modules/editPostSlice";
import detailmainPost from "../modules/detailmainSlice";
import login from "../modules/loginSlice";
import comments from "../modules/commentSlice";
import myPage from "../modules/myPageSlice";

const store = configureStore({
  reducer: {
    editPost,
    detailmainPost,
    login,
    comments,
    myPage,
  },
});

export default store;
