import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            <Text style= {styles.Heading}>Image Screen</Text>
            <ImageDetail title= "Forest" imageSrc= {require("../../assets/forest.jpg")} score = {5} />
            <ImageDetail title= "Beach" imageSrc= {require("../../assets/beach.jpg")} score = {6} />
            <ImageDetail title= "Mountain" imageSrc= {require("../../assets/mountain.jpg")} score = {10} />
        </View>
        )
};

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        marginBottom: 30
      },

});

export default ImageScreen;