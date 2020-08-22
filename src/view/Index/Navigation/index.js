import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//Components
import Main from "../Main";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Navigation;
