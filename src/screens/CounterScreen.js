import React, {useReducer} from "react";
import { Text, View, StyleSheet, Button, } from "react-native";

const reducer = (state, action) => {
    return state + action.payload
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return(
        <View>
            <Button 
                title= "Increase" 
                onPress={ () => {
                    dispatch({payload: 1});
                }} 
            />
            <Button 
                title= "Decrease" 
                onPress={ () => {
                    dispatch({payload: -1});
                }}  
            />
            <Text> Current Count: {state} </Text>

        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;