import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "./view/Home";
import Login from "./view/Login";
import Signup from "./view/Signup";
import RedfinePass from "./view/RedfinePass";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="RedefinePass" component={RedfinePass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
