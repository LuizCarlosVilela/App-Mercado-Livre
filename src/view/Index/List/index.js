import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import styles from "./styles";

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.picture} source={{ uri: item.picture }} />
      <View style={styles.title}>
        <Text style={styles.item_title}>{item.name}</Text>
        <Text style={styles.item_price}>R$ {item.price.toFixed(2)}</Text>
        <Text style={styles.item_subdivision}>
          Parcelado em 12 x{" "}
          <Text style={styles.item_subdivision_detach}>
            R${(item.price / 12).toFixed(2)}
          </Text>
        </Text>
        <Text>{item.condition}</Text>
      </View>
    </TouchableOpacity>
  );
}

const List = ({ navigation }) => {
  const listProduct = [
    {
      id: "2",
      name: "TV",
      price: 1250.27,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
    },
    {
      id: "1",
      name: "TV2",
      price: 1250.27,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
    },
    {
      id: "3",
      name: "TV 2",
      price: 1250.27,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
    },
    {
      id: "4",
      name: "TV 2",
      price: 1250.27,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
    },
  ];

  return (
    <>
      <Text style={styles.text_results}>
        Produtos encontrados: {listProduct.length}
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listProduct}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default List;
