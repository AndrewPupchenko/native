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

const keyFeatures = [
  "Create and manage lists on your device.",
  "Local storage ensures your lists are easily accessible without the need for an internet connection.",
  "User-friendly interface for adding and deleting list items.",
  "Customizable color theme to personalize your app experience.",
]

const howToUse = [
  "Create a new list by typing text in the input field.",
  "Add items to your list with a simple tap.",
  "Delete items as needed.",
  "Explore the app settings to customize the color theme to your liking.",
]

const ListItem: FC<ListRenderItemInfo<string>> = ({ item }) => (
  <Text style={styles.listItem}>{`\u2022 ${item}`}</Text>
)

export const AboutScreen = () => {
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
        onPress={() =>
          sendEmail(
            "andrew.pupchenko@gmail.com",
            "Bug report",
            "Description:\n1. Expected Behavior:\n   [Describe how the application or feature should behave]\n\n2. Actual Behavior:\n   [Describe the actual behavior and detail the problem]\n\nSteps to Reproduce:\n1. [Provide step-by-step instructions to reproduce the issue]\n2. [Include any additional actions or conditions, if applicable]\n\nScreenshots/Videos:\n[Attach screenshots or videos if applicable. This can significantly expedite the bug-fixing process.]\n\nApp Version:\n[Specify the version of your application. For web applications, mention the browser and its version.]\n\nDevice and Operating System:\n[Specify the device model and its operating system. Example: iPhone X, iOS 14.5]\n\nAdditional Information:\n[Any other information that might be helpful, such as error messages, stack traces, etc.]\n\nExpected Priority:\n[Indicate how urgently you would like to see this issue addressed]\n"
          )
        }
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
