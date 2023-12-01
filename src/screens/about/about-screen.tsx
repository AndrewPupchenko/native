import { useTheme } from "@react-navigation/native"
import { sendEmail } from "@shared/utils"
import { FC } from "react"
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { emailProps, howToUse, keyFeatures } from "./constants"

const ListItem: FC<ListRenderItemInfo<string>> = ({ item }) => (
  <Text style={styles.listItem}>{`\u2022 ${item}`}</Text>
)

const AboutScreen: FC = () => {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Useful List!</Text>

      <Text style={styles.section}>
        <Text style={styles.bold}>About:</Text>
        {"\n"}
        Useful List is a small pet project designed to help you create and
        manage lists conveniently. The application allows you to create lists
        that are stored locally on your device, providing a quick and simple way
        to organize your tasks and ideas. With Useful List, you can easily add,
        and delete items from your lists, making it a handy tool for various
        purposes.
      </Text>

      <View>
        <Text style={styles.bold}>Key Features:</Text>
        <FlatList
          data={keyFeatures}
          renderItem={ListItem}
          keyExtractor={(_, index) => index.toString()}
        />

        <Text style={styles.bold}>How to Use:</Text>
        <FlatList
          data={howToUse}
          renderItem={ListItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>

      <Text style={styles.section}>
        Useful List is a work in progress, and we appreciate your support and
        feedback. Feel free to reach out if you have any suggestions or
        encounter any issues.
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => sendEmail(...emailProps)}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
})

export default AboutScreen
