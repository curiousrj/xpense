import { configureStore } from "@reduxjs/toolkit";
import { xpenseReducer } from "./reducers/xpenseReducer";

export default configureStore({
  reducer: {
    xpenseReducer,
  },
});
