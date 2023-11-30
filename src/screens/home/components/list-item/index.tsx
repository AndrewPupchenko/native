import { Animated, StyleSheet } from "react-native"
import { Text } from "react-native-animatable"
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler"
import { OutPutValueType } from "../../../../shared/hooks/use-local-storage"
import { DeleteAction } from "./delete-action"
import { theme } from "../../../../shared"

type ListItemProps = {
  index: number
  item: OutPutValueType
  onSwipe: () => void
}

export const ListItem: React.FC<ListItemProps> = ({ index, item, onSwipe }) => (
  <Swipeable
    renderLeftActions={DeleteAction("left")}
    renderRightActions={DeleteAction("right")}
    onSwipeableOpen={onSwipe}
  >
    <GestureHandlerRootView>
      <Animated.View style={styles.container} key={item.id}>
        <Text style={styles.index}>{index + 1}</Text>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.date}>{item?.createdDate}</Text>
      </Animated.View>
    </GestureHandlerRootView>
  </Swipeable>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomColor: theme.primary.main,
    backgroundColor: theme.background.main,
    borderBottomWidth: 2,
  },
  index: {
    position: "absolute",
    left: 0,
    margin: 5,
    opacity: 0.3,
    fontSize: 12,
  },
  date: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 5,
    opacity: 0.3,
    fontSize: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
})
