import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "./view/Home";
import Login from "./view/Login";
import Signup from "./view/Signup";
import RedfinePass from "./view/RedfinePass";
import Index from "./view/Index";

const Stack = createStackNavigator();

const optionsHeader = () => ({
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#ffe600",
    elevation: 0,
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={optionsHeader} />
        <Stack.Screen name="Login" component={Login} options={optionsHeader} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={optionsHeader}
        />
        <Stack.Screen
          name="RedefinePass"
          component={RedfinePass}
          options={optionsHeader}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
