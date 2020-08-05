import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const Greeting = "My name is Jason";

  return (
    <View>
      <Text style={styles.Heading}>Getting started with react native!</Text>
      <Text style={styles.Subheading}>{Greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 45,
  },
  Subheading: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
