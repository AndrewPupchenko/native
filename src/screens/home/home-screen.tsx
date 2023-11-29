import { FC } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { useLocalStorage } from "../../shared/hooks/use-local-storage"
import { InputItem } from "./components/InputItem"
import { ListItem } from "./components/ListItem"

export const HomeScreen: FC = () => {
  const { data, writeItemToStorage } = useLocalStorage("home")
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data?.value}
        renderItem={ListItem}
        inverted
      />
      <InputItem writeItemToStorage={writeItemToStorage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  list: {
    marginBottom: 100,
  },
})

export default HomeScreen
