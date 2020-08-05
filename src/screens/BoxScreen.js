import React from "react";
import {Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View style= {styles.viewStyle}>
            <View style={styles.textOneStyle} ></View>
            <View style={styles.textTwoStyle} ></View>
            <View style={styles.textThreeStyle} ></View>
        </View>
    )    
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        marginBottom: 30,
      },
    viewStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        // flexDirection: "row",
        height: 200,
        // justifyContent: "space-evenly"
    },
    textOneStyle: {
        // borderWidth: 3,
        // borderColor: "red",
        backgroundColor: "red",
        height: 50,
        width: 50,
        // flex: 1
        alignSelf: "flex-start",
    },
    textTwoStyle: {
        // borderWidth: 3,
        // borderColor: "purple",
        backgroundColor: "purple",
        // flex: 1,
        alignSelf: "flex-end",
        position: "absolute",
        right: 5,
        // right: 0, 
        // bottom: 0,
        top: 5,
        // ...StyleSheet.absoluteFillObject,
        height: 50,
        width: 50,
    },
    textThreeStyle: {
        // borderWidth: 3,
        // borderColor: "green",
        backgroundColor: "green",
        // flex: 1
        height: 50,
        width: 50,
    },
}
)

export default BoxScreen;