import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
