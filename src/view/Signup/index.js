import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";

import logo from "../../../assets/logo.png";

import styles from "./styles";
import Button from "../../components/Button";

import firebase from "../../services/firebase";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  async function handleSignup() {
    if ((user, pass)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user, pass)
        .then((response) => {
          Alert.alert("Ok", "Conta criada com sucesso!");
          navigation.navigate("Index");
        })
        .catch((erro) => {
          Alert.alert("Ops", "Não foi possível criar seu cadastro");
        });
    } else {
      Alert.alert("Erro", "Preencher o E-mail e senha");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.containerInput}>
        <TextInput
          name="user"
          style={styles.input}
          autoCapitalize="none"
          placeholder="E-mail"
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          name="pass"
          style={styles.input}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPass(text)}
        />
      </View>
      <Button style="outline" onPress={handleSignup}>
        <Text style={styles.text_primary}>ENTRAR</Text>
      </Button>
    </View>
  );
};

export default Signup;
