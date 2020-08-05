import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [Name, setName] = useState("");  

  return (
    <View>
      <Text style={styles.Heading}>TextScreen</Text>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        value= {Name}
        onChangeText= {(newValue) => setName(newValue) }
      />
      {/* <Text>My name is {Name} </Text> */}
      {Name.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    marginBottom: 30,
  },
  Input: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
