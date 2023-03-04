import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

type VauleType = { label: string; value?: string; checked?: boolean }
type OutPutVauleType = VauleType & { id: number }

type StorageStucture = { storage_key: string; value: OutPutVauleType[] }

export const useLocalStorage = (storage_key: string) => {
  const [data, setData] = useState<StorageStucture | null>(null)
  const { getItem, setItem } = useAsyncStorage(storage_key)

  const readItemFromStorage = async () => {
    const item = await getItem()
    setData(item ? JSON.parse(item) : null)
  }

  const writeItemToStorage = async (newValue: VauleType) => {
    const old_values = data?.value || []
    const combined_array: OutPutVauleType[] = [
      ...old_values,
      { ...newValue, id: old_values.length + 1 },
    ]
    const combined_value: StorageStucture = {
      storage_key,
      value: combined_array,
    }

    const string_value = JSON.stringify(combined_value)

    await setItem(string_value)
    setData(combined_value)
  }

  useEffect(() => {
    readItemFromStorage()
  }, [])

  return { readItemFromStorage, writeItemToStorage, data }
}
