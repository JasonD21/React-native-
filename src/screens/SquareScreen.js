import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import SquareDetail from "../components/SquareDetail";

const COLOUR = 15;

const reducer = (state, action) => {
  switch (action.type){
    case "change_Red":
      return state.Red + action.payload > 255 || state.Red + action.payload < 0 
        ? state
        : {...state, Red: state.Red + action.payload};
    case "change_Green":
      return state.Green + action.payload > 255 || state.Green + action.payload < 0
        ? state
        : {...state, Green: state.Green + action.payload};
    case "change_Blue":
      return state.Blue + action.payload > 255 || state.Blue + action.payload < 0
        ? state
        : {...state, Blue: state.Blue + action.payload};
    default:
      return state;
  }
}

const SquareScreen = () => { 
  const [state, dispatch] = useReducer(reducer, {Red: 0, Green: 0, Blue: 0});

  return (
    <View>
      <Text style = {styles.Heading}>Square Screen</Text>
      <SquareDetail
        title="Red"
        onInc={() => dispatch({type: "change_Red", payload: COLOUR}) }
        onDec={() => dispatch({type: "change_Red", payload: -1 * COLOUR})}
      />
      <SquareDetail
        title="Green"
        onInc={() => dispatch({type: "change_Green", payload: COLOUR})}
        onDec={() => dispatch({type: "change_Green", payload: -1 * COLOUR})}
      />
      <SquareDetail
        title="Blue"
        onInc={() => dispatch({type: "change_Blue", payload: COLOUR})}
        onDec={() => dispatch({type: "change_Blue", payload: -1 * COLOUR})}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.Red}, ${state.Green}, ${state.Blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    marginBottom: 30,
  },
  box: {},
});

export default SquareScreen;
