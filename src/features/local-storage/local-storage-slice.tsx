import AsyncStorage from "@react-native-async-storage/async-storage"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { OutPutValueType, ValueType } from "@shared/types"
import { dateFormatter } from "@shared/utils"

const storage_key = "list"
const initialState: OutPutValueType[] = []

export const fetchInitialState = createAsyncThunk(
  "localStorage/fetchInitialState",
  async () => {
    try {
      const item = await AsyncStorage.getItem(storage_key)
      return item ? JSON.parse(item) : []
    } catch {
      return []
    }
  }
)

export const localStorageSlice = createSlice({
  name: "localStorage",
  initialState,
  reducers: {
    writeItemToStorage: (state, action: PayloadAction<ValueType>) => {
      const combinedValue: OutPutValueType[] = [
        ...state,
        {
          ...action.payload,
          id: Math.random(),
          createdDate: dateFormatter(new Date()),
        },
      ]
      AsyncStorage.setItem(storage_key, JSON.stringify(combinedValue))
      return combinedValue
    },
    clearStorage: () => {
      AsyncStorage.setItem(storage_key, JSON.stringify([]))
      return []
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const newValue = state.filter((el) => el.id !== action.payload)
      AsyncStorage.setItem(storage_key, JSON.stringify(newValue))
      return newValue
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state, action) => {
      state = action.payload
      return action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { writeItemToStorage, clearStorage, deleteItem } =
  localStorageSlice.actions

export default localStorageSlice.reducer
