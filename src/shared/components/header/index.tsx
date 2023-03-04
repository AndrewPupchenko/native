import { FC } from "react"
import { Text } from "react-native"

type HeaderProps = {
  title?: string
}

export const Header: FC<HeaderProps> = ({ title }) => <Text children={title} />
