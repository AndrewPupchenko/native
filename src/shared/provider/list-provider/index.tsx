import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { dateFormatter } from "@shared/utils"
import React, {
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  LocalStorageContextType,
  OutPutValueType,
  StorageStructure,
  ValueType,
} from "./list-provider.models"

const storage_key = "home"

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined
)

function useLocalStorage(): LocalStorageContextType {
  const context = useContext(LocalStorageContext)
  if (!context)
    throw new Error(
      "useLocalStorage must be used within an LocalStorageProvider"
    )

  return context
}

const LocalStorageProvider = (props: { children: ReactNode }): ReactElement => {
  const [value, setValue] = useState<OutPutValueType[]>([])
  const { getItem, setItem } = useAsyncStorage(storage_key)

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem()
    setValue(item ? JSON.parse(item).value : null)
  }, [setValue, getItem])

  const setStorageValue = useCallback(
    async (newValue: OutPutValueType[]) => {
      const combined_value: StorageStructure = {
        storage_key,
        value: newValue,
      }

      await setItem(JSON.stringify(combined_value))
      setValue(newValue)
    },
    [setValue, setItem]
  )

  const writeItemToStorage = useCallback(
    async (newValue: ValueType) => {
      const combinedValue: OutPutValueType[] = [
        ...value,
        {
          ...newValue,
          id: Math.random(),
          createdDate: dateFormatter(new Date()),
        },
      ]
      await setStorageValue(combinedValue)
    },
    [value, setStorageValue]
  )

  const clearStorage = useCallback(
    async () => await setStorageValue([]),
    [setStorageValue]
  )

  const deleteItem = useCallback(
    (id: number) => async () => {
      const newValue = value.filter((el) => el.id !== id)
      setStorageValue(newValue)
    },
    [value, setStorageValue]
  )

  useEffect(() => {
    readItemFromStorage()
  }, [])

  return (
    <LocalStorageContext.Provider
      {...props}
      value={{
        readItemFromStorage,
        writeItemToStorage,
        clearStorage,
        deleteItem,
        value,
      }}
    />
  )
}

export { LocalStorageProvider, useLocalStorage }
