import { StyleSheet, TextInput } from "react-native"
import { Text, View } from "react-native-animatable"
import { TouchableOpacity } from "react-native-gesture-handler"
import { VauleType } from "../../../shared/hooks/use-local-storage"
import { useInputList } from "../hooks/useInputList"
import { useCallback } from "react"

type InputItemProps = {
  writeItemToStorage: (newValue: VauleType) => void
}

export const InputItem: React.FC<InputItemProps> = ({ writeItemToStorage }) => {
  const { inputText, setInputText, cleanInput } = useInputList()

  const hanldeCreate = useCallback(() => {
    writeItemToStorage({ value: inputText, label: inputText })
    cleanInput()
  }, [writeItemToStorage, cleanInput])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={setInputText}
        defaultValue={inputText}
        value={inputText}
        onSubmitEditing={hanldeCreate}
        autoFocus
      />
      <TouchableOpacity onPress={hanldeCreate} style={styles.button}>
        <Text>Create value</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 5,
    backgroundColor: "beige",
    borderRadius: 5,
  },
  input: {
    paddingHorizontal: 20,
    height: 50,
  },
  button: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "hotpink",
  },
})
