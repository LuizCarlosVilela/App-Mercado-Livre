import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import logo from "../../../assets/logo.png";

import styles from "./styles";
import Button from "../../components/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.containerInput}>
        <TextInput
          name="user"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
        <TextInput
          name="user"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
      </View>
      <Button style="outline">
        <Text style={styles.text_primary}>ENTRAR</Text>
      </Button>

      <TouchableOpacity style={styles.redefinePass}>
        <Text style={styles.text_primary}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
