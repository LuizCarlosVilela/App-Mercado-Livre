import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import logo from "../../../assets/logo.png";

import styles from "./styles";
import Button from "../../components/Button";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Button style="outline">
        <Text>ENTRAR</Text>
      </Button>
      <Button>
        <Text style={styles.text_white}>CRIAR CONTA</Text>
      </Button>
    </View>
  );
};

export default Home;
