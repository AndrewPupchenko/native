import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { useCallback, useEffect, useState } from "react"
import { dateFormatter } from "../../utils/date-formatter"

export type ValueType = {
  label: string
  value?: string
  checked?: boolean
  createdDate?: string
}
export type OutPutValueType = ValueType & { id: number }

type StorageStucture = { storage_key: string; value: OutPutValueType[] }

export const useLocalStorage = (storage_key: string) => {
  const [data, setData] = useState<StorageStucture | null>(null)
  const { getItem, setItem } = useAsyncStorage(storage_key)

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem()
    setData(item ? JSON.parse(item) : null)
  }, [setData, getItem])

  const writeItemToStorage = useCallback(
    async (newValue: ValueType) => {
      const old_values = data?.value ?? []
      const combined_array: OutPutValueType[] = [
        ...old_values,
        {
          ...newValue,
          id: Math.random(),
          createdDate: dateFormatter(new Date()),
        },
      ]
      const combined_value: StorageStucture = {
        storage_key,
        value: combined_array,
      }

      const string_value = JSON.stringify(combined_value)

      await setItem(string_value)
      setData(combined_value)
    },
    [setItem, setData]
  )

  const clearStorage = useCallback(async () => {
    const combined_value: StorageStucture = {
      storage_key,
      value: [],
    }

    await setItem(JSON.stringify(combined_value))
    setData(null)
  }, [setItem, setData])

  const deleteItem = useCallback(
    (id: number) => async () => {
      const combined_value: StorageStucture = {
        storage_key,
        value: data?.value.filter((el) => el.id !== id) ?? [],
      }

      await setItem(JSON.stringify(combined_value))
      setData(combined_value)
    },
    [setItem, setData]
  )

  useEffect(() => {
    readItemFromStorage()
  }, [])

  return {
    readItemFromStorage,
    writeItemToStorage,
    clearStorage,
    deleteItem,
    data,
  }
}
