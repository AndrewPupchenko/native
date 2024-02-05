import {
  deleteItem,
  writeItemToStorage,
} from "@features/local-storage/local-storage-slice"
import { RootState } from "app/store"
import { FC } from "react"
import { FlatList, SafeAreaView, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { InputItem } from "./components/input-item"
import { ListItem } from "./components/list-item"

export const HomeScreen: FC = () => {
  const list = useSelector((state: RootState) => state.localStorage)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles?.container}>
      <FlatList
        style={styles?.list}
        data={list}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item, index }) => (
          <ListItem
            index={index}
            item={item}
            onSwipe={() => dispatch(deleteItem(item?.id))}
          />
        )}
      />
      <InputItem
        writeItemToStorage={(el) => dispatch(writeItemToStorage(el))}
      />
    </SafeAreaView>
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
