import React from "react";
import { View, Image, Alert, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import styles from "./styles";
import Navigation from "./Navigation";
import logoMP from "../../assets/mercado_pago.png";
import Profile from "../../components/Profile";

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
  return (
    <View style={styles.drawer_header}>
      <View style={styles.user}>
        <Profile />
        <View>
          <Text>Olá José</Text>
          <Text>Nivel 3 - Mercado Pontos</Text>
        </View>
      </View>
      <View style={styles.mercado_pago}>
        <Image source={logoMP} />
        <Text style={styles.mercado_pago_text}>Mercado Pago</Text>
      </View>
    </View>
  );
};

const FooterDrawer = () => {
  return (
    <View>
      <Text>Desenvolvido por </Text>
    </View>
  );
};

const DrawerContent = ({ navigation }) => {
  const listMenuDrawer = [
    {
      id: 1,
      name: "Home",
      action: "Main",
      icon: <AntDesign name="home" size={24} color="black" />,
    },
    {
      id: 2,
      name: "Procurar",
      action: "List",
      icon: <AntDesign name="search1" size={24} color="black" />,
    },
  ];

  return (
    <View style={styles.drawer_content}>
      <HeaderDrawer />
      <View style={styles.drawer_body}>
        <DrawerContentScrollView>
          {listMenuDrawer.map((menu) => (
            <DrawerItem
              label={menu.name}
              key={menu.id}
              icon={() => menu.icon}
              onPress={() => navigation.navigate(menu.action)}
            />
          ))}
        </DrawerContentScrollView>
      </View>
      <FooterDrawer />
    </View>
  );
};

const Index = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Navigation" component={Navigation} />
    </Drawer.Navigator>
  );
};

export default Index;
