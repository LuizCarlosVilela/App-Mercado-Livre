import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const ItemDetais = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.view}>
        <Image
          style={styles.picture}
          source={{
            uri: item.picture,
          }}
        />
      </View>

      <View style={styles.detais}>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>

        <Text style={styles.item_subdivision}>
          Parcelado em 12 x{" "}
          <Text style={styles.item_subdivision_detach}>
            R${(item.price / 12).toFixed(2)}
          </Text>
        </Text>

        <Text style={styles.condition}>{item.condition}</Text>
      </View>
    </View>
  );
};

export default ItemDetais;
