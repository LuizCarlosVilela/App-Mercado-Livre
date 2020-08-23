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

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Item({ item }) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigate("Item", { item })}
    >
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
      name: "Celular LG K40S Preto",
      price: 849.0,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/50005855/1198731640/smartphone-lg-k40s-preto-32gb-tela-61-hd-fullvision-inteligencia-artificial-camera-traseira-dupla-selfie-de-13mp-e-processador-octa-core-50005855.jpg",
    },
    {
      id: "1",
      name: "Celular xiaomi Redmi 7A",
      price: 999.0,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/1500603461/1394929951/xiaomi-redmi-7a-2gb-ram-32gb-global-preto-1500603461.jpg",
    },
    {
      id: "3",
      name: "Celular Samsung Galaxy A01",
      price: 799.0,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/1503683221/1375015933/celular-samsung-galaxy-a01-32gb-2gb-ram-13mp-2mp-vermelho-1503683221.jpg",
    },
    {
      id: "4",
      name: "Celular Xiaomi Redmi Note 8 ",
      price: 1590.0,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/1501012424/1198292626/smartphone-xiaomi-redmi-note-8-4gb-64gb-dual-space-black-preto-1501012424.jpg",
    },
    {
      id: "5",
      name: " Celular Samsung Galaxy A30s",
      price: 1399.0,
      condition: "Novo",
      picture:
        "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/50005033/1189278412/smartphone-samsung-galaxy-a30s-preto-64gb-4gb-ram-tela-infinita-de-6-4-camera-traseira-tripla-leitor-digital-na-tela-android-9-0-e-tv-digital-50005033.jpg",
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
