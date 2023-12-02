import { DrawerNavigationOptions } from "@react-navigation/drawer"
import { useLocalStorage } from "@shared/provider"
import { FC } from "react"
import { Alert, Text, TouchableOpacity } from "react-native"
import AboutScreen from "../screens/about/about-screen"
import HomeScreen from "../screens/home/home-screen"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

const homeHeaderRight = () => {
  const { clearStorage } = useLocalStorage()

  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          "Clearing the list",
          "After performing this action, the list of items is completely cleared. Are you sure you want to do this?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Clear",
              onPress: clearStorage,
              style: "destructive",
            },
          ],
          {
            cancelable: true,
          }
        )
      }
      style={{ padding: 15 }}
      children={<Text>Clear All</Text>}
    />
  )
}

export const PagesList: {
  name: string
  component: FC
  options?: DrawerNavigationOptions
}[] = [
  {
    name: "Checklist",
    component: HomeScreen,
    options: {
      headerRight: homeHeaderRight,
      drawerIcon: (props) => <Ionicons name="list-circle" {...props} />,
    },
  },
  {
    name: "About",
    component: AboutScreen,
    options: {
      drawerIcon: (props) => <MaterialIcons name="info-outline" {...props} />,
    },
  },
]
