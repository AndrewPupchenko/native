import { useCallback } from "react"
import { StyleSheet, TextInput } from "react-native"
import { View } from "react-native-animatable"
import { ValueType } from "@shared/hooks/use-local-storage"
import { useInputList } from "../hooks/use-input-list"
import { useTheme } from "@react-navigation/native"

type InputItemProps = {
  writeItemToStorage: (newValue: ValueType) => void
}

export const InputItem: React.FC<InputItemProps> = ({ writeItemToStorage }) => {
  const { inputText, setInputText, cleanInput } = useInputList()
  const theme = useTheme()

  const handleCreate = useCallback(() => {
    writeItemToStorage({ value: inputText, label: inputText })
    cleanInput()

    return true
  }, [writeItemToStorage, cleanInput])

  return (
    <View style={[styles.container, { borderColor: theme.colors.border }]}>
      <TextInput
        style={[styles.input]}
        placeholder="Type here to create new item..."
        onChangeText={setInputText}
        defaultValue={inputText}
        value={inputText}
        onSubmitEditing={handleCreate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    marginHorizontal: 5,
    marginVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 5,
    borderRadius: 20,
  },
  input: {
    paddingHorizontal: 20,
    height: 50,
  },
})
