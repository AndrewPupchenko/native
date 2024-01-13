import { configureStore } from "@reduxjs/toolkit"
import localStorageReducer, {
  fetchInitialState,
} from "../features/local-storage/local-storage-slice"

export const store = configureStore({
  reducer: {
    localStorage: localStorageReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

store.dispatch(fetchInitialState())
