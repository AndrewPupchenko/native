import { FC, useState } from "react"
import { FlatList, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Header } from "../../shared/components/header"
import { useLocalStorage } from "../../shared/hooks/use-local-storage"

export const HomeScreen: FC = () => {
  const { data, writeItemToStorage } = useLocalStorage("home")
  const [inputText, setInputText] = useState<string>("")

  return (
    <View>
      <Header title={data?.storage_key} />
      <FlatList
        data={data?.value}
        renderItem={({ item }) => <Text key={item.id}>{item.label}</Text>}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to create label"
        onChangeText={setInputText}
        defaultValue={inputText}
        value={inputText}
      />
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage({ value: inputText, label: inputText })
        }
        style={{ backgroundColor: "red" }}
      >
        <Text>Update value</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
