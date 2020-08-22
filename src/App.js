import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";

import Navigation from "./Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}
