import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Main = ({ navigation }) => {
  return (
    <ScrollView>
      <Text>Página home</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Main;
