import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SquareDetail = (props) => {
  return (
    <View style={styles.Heading}>
      <Text> {props.title} </Text>
      <Button title={`Increase ${props.title}`} onPress={() => props.onInc()} />
      <Button title={`Decrease ${props.title}`} onPress={() => props.onDec()} />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default SquareDetail;
