import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Página home</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
