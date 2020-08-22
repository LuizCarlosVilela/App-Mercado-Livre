import React from "react";
import { View, Text, Image } from "react-native";

import logo from "../../../assets/logo.png";

import styles from "./styles";
import Button from "../../components/Button";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Button style="outline" onPress={() => navigation.navigate("Login")}>
        <Text>ENTRAR</Text>
      </Button>
      <Button>
        <Text style={styles.text_white}>CRIAR CONTA</Text>
      </Button>
    </View>
  );
};

export default Home;
