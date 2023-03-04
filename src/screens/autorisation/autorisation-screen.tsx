import { Formik } from "formik"
import React, { useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import * as Animatable from "react-native-animatable"
import AnimatedInput from "../../shared/components/input"
import styles from "./styles"
import { MaterialIcons } from "@expo/vector-icons"

type Props = {
  navigation: any
}

type LoginFormValues = {
  username: string
  password: string
}

const AuthorizationScreen: React.FC<Props> = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await fetch("https://yourserver.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json()
        setErrorMessage(data.error)
        return
      }

      navigation.navigate("Home")
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <Animatable.View style={styles.container} animation="fadeIn">
      <MaterialIcons style={styles.icon} name={"login"} size={100} />
      <Animatable.View>
        <Formik
          initialValues={{ username: "", password: "", showPassword: false }}
          onSubmit={handleLogin}
          validate={(values) => {
            const errors: Partial<LoginFormValues> = {}

            setErrorMessage("")
            
            if (!values.username)
              errors.username = "Please enter your User name."
            if (!values.password)
              errors.password = "Please enter your Password."

            return errors
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <AnimatedInput
                label="User name"
                placeholder="User name"
                value={values.username}
                onChangeText={handleChange("username")}
                touched={touched.username}
                error={errors.username}
              />
              <AnimatedInput
                label="Password"
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                touched={touched.password}
                error={errors.password}
                secureTextEntry={!values.showPassword}
                inputEnd={
                  <TouchableOpacity
                    style={styles.showPasswordButton}
                    onPress={() =>
                      setFieldValue("showPassword", !values.showPassword)
                    }
                  >
                    <MaterialIcons
                      name={
                        values.showPassword ? "visibility-off" : "visibility"
                      }
                      size={24}
                    />
                  </TouchableOpacity>
                }
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
              <Animatable.Text
                style={styles.errorMessage}
                children={errorMessage}
              />
            </>
          )}
        </Formik>
      </Animatable.View>
    </Animatable.View>
  )
}

export default AuthorizationScreen
