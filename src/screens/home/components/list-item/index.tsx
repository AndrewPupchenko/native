import { useTheme } from "@react-navigation/native"
import { OutPutValueType } from "@shared/types"
import { Animated, StyleSheet } from "react-native"
import { Text } from "react-native-animatable"
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler"
import { DeleteAction } from "./delete-action"

type ListItemProps = {
  index: number
  item: OutPutValueType
  onSwipe: () => void
}

export const ListItem: React.FC<ListItemProps> = ({ index, item, onSwipe }) => {
  const theme = useTheme()

  return (
    <Swipeable
      renderLeftActions={() => <DeleteAction alignItems="flex-start" />}
      renderRightActions={() => <DeleteAction alignItems="flex-end" />}
      onSwipeableOpen={onSwipe}
    >
      <GestureHandlerRootView>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}
          key={item.id}
        >
          <Text style={[styles.index]}>{index + 1}</Text>
          <Text style={[styles.label]}>{item.label}</Text>
          <Text style={[styles.date]}>{item?.createdDate}</Text>
        </Animated.View>
      </GestureHandlerRootView>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
