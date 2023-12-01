import { AntDesign } from "@expo/vector-icons"
import { useTheme } from "@react-navigation/native"
import React from "react"
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native"

export const DeleteAction = (props: StyleProp<ViewStyle>) => {
  const theme = useTheme()

  return (
    <View style={[styles.delete, { backgroundColor: theme?.colors?.primary }]}>
      <Animated.View style={[props]}>
        <AntDesign
          style={styles.deleteIcon}
          name="delete"
          size={24}
          color="white"
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  delete: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  deleteIcon: {
    padding: 10,
  },
})
