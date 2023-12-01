import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { darkTheme, defaultTheme } from "@shared/constant"
import { LocalStorageProvider } from "@shared/provider/list-provider"
import { FC } from "react"
import { Appearance } from "react-native"
import { PagesList } from "./pages-list"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerScreen = () => (
  <Drawer.Navigator>
    {PagesList.map((el) => (
      <Drawer.Screen key={el.name} {...el} />
    ))}
  </Drawer.Navigator>
)

export const MainNavigator: FC = () => {
  const colorScheme = Appearance.getColorScheme()

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? darkTheme : defaultTheme}
    >
      <LocalStorageProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </LocalStorageProvider>
    </NavigationContainer>
  )
}
