import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = (props) => {
    return(
        <View style= {styles.Heading}>
            <Text> {props.title}</Text>
            <Image source= {props.imageSrc} />
            <Text> Image score - {props.score} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        marginBottom: 10
      },

});

export default ImageDetail;