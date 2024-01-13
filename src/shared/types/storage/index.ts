export type ValueType = {
  label: string
  value?: string
  checked?: boolean
  createdDate?: string
}

export type OutPutValueType = ValueType & { id: number }
