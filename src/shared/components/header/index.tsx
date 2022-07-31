import { Text } from "react-native";

type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <Text children={title} />
);
