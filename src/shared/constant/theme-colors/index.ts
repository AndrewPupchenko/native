type Colors = {
  light: string
  main: string
  dark: string
}

type ThemeType = Record<
  "primary" | "secondary" | "error" | "success" | "background" | "text",
  Colors
>

export const theme: ThemeType = {
  primary: {
    light: "#E0F4F5",
    main: "#63898C",
    dark: "#033540",
  },
  secondary: {
    light: "#D39CA9",
    main: "#995E7C",
    dark: "#312528",
  },
  error: {
    light: "#F7E2E1",
    main: "#ff8888",
    dark: "#a95354",
  },
  success: {
    light: "#AEC09A",
    main: "#AEC670",
    dark: "#344C11",
  },
  background: {
    light: "#F7E2E1",
    main: "#ebebeb",
    dark: "#3F3937",
  },
  text: {
    light: "#0000",
    main: "#1D0F0F",
    dark: "#ffff",
  },
}
