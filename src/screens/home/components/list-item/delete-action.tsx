import React from "react"
import { Animated, StyleSheet, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { theme } from "../../../../shared/constant/theme-colors"

export const DeleteAction =
  (dir: "left" | "right") =>
  (_: unknown, dragX: Animated.AnimatedInterpolation<string | number>) => {
    const scale = dragX.interpolate({
      inputRange: dir === "right" ? [-100, 0] : [0, 100],
      outputRange: dir === "right" ? [1, 0.9] : [0.9, 1],
      extrapolate: "clamp",
    })

    return (
      <View style={[styles.delete]}>
        <Animated.View
          style={[
            {
              transform: [{ scale }],
              alignItems: dir === "right" ? "flex-end" : "flex-start",
            },
          ]}
        >
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
    backgroundColor: theme.error.main,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  deleteIcon: {
    padding: 10,
  },
})
