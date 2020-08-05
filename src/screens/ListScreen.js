import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const Friends = [
        {name: "Friend 1", age: "20"},
        {name: "Friend 2", age: "45"},
        {name: "Friend 3", age: "32"},
        {name: "Friend 4", age: "27"},
        {name: "Friend 5", age: "53"},
        {name: "Friend 6", age: "30"},
        {name: "Friend 7", age: "61"},
        {name: "Friend 8", age: "12"},
        {name: "Friend 9", age: "22"},
    ]


    return (
        <View>
        <Text style= {styles.heading}>List Screen</Text>
        <FlatList
        showsVerticalScrollIndicator= {false}
        keyExtractor= {(friend) => friend.name}
        data= {Friends} 
        renderItem= {({ item }) => {
        return <Text style= {styles.listStyle}>{item.name} - age {item.age} </Text>;
        }} 
        />
        </View>
        
    );
};

const styles =  StyleSheet.create(
    {
        heading: {
            fontSize: 30,
            marginBottom: 20
        },

        listStyle: {
            marginVertical:30
        }
        
    }
)

export default ListScreen;