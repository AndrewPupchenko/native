import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: "#FF0000",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  showPasswordButton: {
    padding: 10,
  },

  errorMessage: {
    color: "#FF0000",
    marginTop: 5,
    textAlign: "center",
  },

  icon: {
    textAlign: "center",
  },
})

export default styles
