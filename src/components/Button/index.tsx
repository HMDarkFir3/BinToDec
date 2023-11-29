import { FC } from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

export const Button: FC<Props> = (props) => {
  const { title, ...rest } = props;

  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
