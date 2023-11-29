import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FC } from "react"
import { AboutScreen } from "../screens/about/about-screen"
import { HomeScreen } from "../screens/home/home-screen"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    {/* <Stack.Screen name="Settings" component={Settings} /> */}
  </Drawer.Navigator>
)

export const MainNavigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
