import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

interface Props extends TextInputProps {}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { ...rest } = props;

  return <TextInput style={styles.container} ref={ref} {...rest} />;
});
