import React from "react"
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"
import * as Animatable from "react-native-animatable"

type AnimatedInputProps = TextInputProps & {
  label: string
  touched?: boolean
  error?: string
  inputEnd?: React.ReactNode
}

const AnimatedInput = ({
  label,
  touched,
  error,
  inputEnd,
  ...inputProps
}: AnimatedInputProps) => {
  const handleFocus = () => {
    inputRef?.current?.bounceIn?.(300)
    labelRef?.current?.bounceIn?.(300)
  }

  const handleBlur = () => {
    if (!inputProps.value) {
      inputRef.current?.bounceOut?.(300)
      labelRef.current?.bounceOut?.(300)
    }
  }

  const inputRef = React.useRef<Animatable.View & TextInput>(null)
  const labelRef = React.useRef<Animatable.Text & TextInput>(null)

  return (
    <View style={styles.inputContainer}>
      <Animatable.Text
        ref={labelRef}
        style={styles.label}
        animation="bounceIn"
        duration={300}
        children={label}
      />

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          {...inputProps}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {inputEnd}
      </View>

      {error && touched && <Text style={styles.error} children={error} />}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  error: {
    color: "#FF0000",
    marginTop: 1,
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C7E8CA",
    border: "2px dotted",

    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
})

export default AnimatedInput
