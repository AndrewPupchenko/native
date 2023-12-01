export type ValueType = {
  label: string
  value?: string
  checked?: boolean
  createdDate?: string
}
export type OutPutValueType = ValueType & { id: number }
export type StorageStructure = { storage_key: string; value: OutPutValueType[] }

export type LocalStorageContextType = {
  readItemFromStorage: () => Promise<void>
  writeItemToStorage: (newValue: ValueType) => Promise<void>
  clearStorage: () => Promise<void>
  deleteItem: (id: number) => () => Promise<void>
  value: OutPutValueType[]
}
