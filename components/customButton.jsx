import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from "react-native";



const CustomButton = ({ text, onPress }) => {

  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={ text === "X" ? styles.delete : styles.button }>
        <Text style={ text === "X" ? styles.deleteText : styles.buttonText }>{ text }</Text>
      </View>
    </TouchableOpacity>

  )
}

export default CustomButton;


const styles = StyleSheet.create({



  button: {

    backgroundColor: "#F08080",
    padding: 10,
    // borderWidth: 1,
    borderRadius: 15,
  },
  delete: {
    backgroundColor: "whitesmoke",
  },
  buttonText: {
    color: "#FFFAF0",
    fontSize: 17,
    fontWeight: "bold"
  },
  deleteText: {
    color: "red",
    fontSize: 20,
  }
});