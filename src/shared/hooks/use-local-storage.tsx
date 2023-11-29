import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { useCallback, useEffect, useState } from "react"

export type VauleType = {
  label: string
  value?: string
  checked?: boolean
  createdDate?: Date
}
export type OutPutVauleType = VauleType & { id: number }

type StorageStucture = { storage_key: string; value: OutPutVauleType[] }

export const useLocalStorage = (storage_key: string) => {
  const [data, setData] = useState<StorageStucture | null>(null)
  const { getItem, setItem, removeItem } = useAsyncStorage(storage_key)

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem()
    setData(item ? JSON.parse(item) : null)
  }, [setData, getItem])

  const writeItemToStorage = useCallback(
    async (newValue: VauleType) => {
      const old_values = data?.value || []
      const combined_array: OutPutVauleType[] = [
        ...old_values,
        {
          ...newValue,
          id: Math.random(),
          createdDate: new Date(),
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

  useEffect(() => {
    readItemFromStorage()
  }, [])

  return { readItemFromStorage, writeItemToStorage, clearStorage, data }
}
