import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";

export const store = configureStore({
    reducer: {
        bookSlice:bookSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

