import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

import editPost from "../modules/editPostSlice";
import detailmainPost from "../modules/detailmianSlice";

const store = configureStore({
  reducer: {
    editPost: editPost,
    detailmainPost: detailmainPost,
  },
});

export default store;
