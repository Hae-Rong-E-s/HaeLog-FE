import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import editPost from "../modules/editPostSlice";

const store = configureStore({
  reducer: {
    editPost: editPost,
  },
});

export default store;
