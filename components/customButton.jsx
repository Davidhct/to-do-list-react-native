import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from "react-native";



const CustomButton = ({ text, onPress }) => {

  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={ text === "Delete" ? styles.delete : styles.button }>
        <Text style={ text === "Delete" ? styles.deleteText : styles.buttonText }>{ text }</Text>
      </View>
    </TouchableOpacity>

  )
}

export default CustomButton;


const styles = StyleSheet.create({



  button: {

    backgroundColor: "#20B2AA",
    padding: 10,
    // borderWidth: 1,
    borderRadius: 15,
  },
  delete: {
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    elevation: 5,
    padding: 5
  },
  buttonText: {
    color: "#FFFAF0",
    fontSize: 17,
    fontWeight: "bold"
  },
  deleteText: {
    color: "red",
    fontSize: 17,

  }
});