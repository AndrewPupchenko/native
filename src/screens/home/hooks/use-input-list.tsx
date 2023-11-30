import { useState } from "react"

export const useInputList = () => {
  const [inputText, setInputText] = useState<string>("")

  const cleanInput = () => {
    setInputText("")
  }

  return { inputText, setInputText, cleanInput }
}
