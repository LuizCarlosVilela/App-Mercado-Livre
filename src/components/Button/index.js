import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={
        props.style == "outline"
          ? styles.btn_outline_primary
          : styles.btn_primary
      }
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
