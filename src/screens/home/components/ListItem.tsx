import { Text, View } from "react-native-animatable"
import { OutPutVauleType } from "../../../shared/hooks/use-local-storage"
import { StyleSheet } from "react-native"

type ListItemProps = {
  item: OutPutVauleType
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <View style={styles.container} key={item.id}>
    <Text>{item.label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "aquamarine",
    borderRadius: 5,
  },
})
