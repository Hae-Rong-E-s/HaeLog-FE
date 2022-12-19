import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

import editPost from "../modules/editPostSlice";
import detailmainPost from "../modules/detailmainSlice";
import login from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    editPost,
    detailmainPost,
    login,
  },
});

export default store;
