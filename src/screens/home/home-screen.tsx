import { FC } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { useLocalStorage } from "../../shared/hooks/use-local-storage"
import { InputItem } from "./components/input-item"
import { ListItem } from "./components/list-item"

export const HomeScreen: FC = () => {
  const { data, writeItemToStorage, deleteItem } = useLocalStorage("home")

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data?.value}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item, index }) => (
          <ListItem index={index} item={item} onSwipe={deleteItem(item.id)} />
        )}
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
