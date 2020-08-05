import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate("Components")} 
        title= "Go to Components Demo" 
      />
      <Button
        title= "Go to List Demo"
        onPress= {() => navigation.navigate("List")}
      />
      <Button
        title= "Go to Image Demo"
        onPress= {() => navigation.navigate("Imagescreen")} 
      />
      <Button
        title= "Go to Counter Demo"
        onPress= {() => navigation.navigate("Counter")} 
      />
      <Button
        title= "Go to Colour Demo"
        onPress= {() => navigation.navigate("Colour")} 
      />
      <Button
        title= "Go to Square Demo"
        onPress= {() => navigation.navigate("Square")} 
      />
      <Button
        title= "Go to Text Demo"
        onPress= {() => navigation.navigate("Text")} 
      />
      <Button
        title= "Go to Box Demo"
        onPress= {() => navigation.navigate("Box")} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 30
  },
});

export default HomeScreen;