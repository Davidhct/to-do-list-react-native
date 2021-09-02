import React, { useState } from 'react';
import CustomButton from './customButton';
import { StyleSheet, View, Text, CheckBox } from "react-native";

const Item = ({ item, deleteItem }) => {
  const [isSelected, setSelection] = useState(false);
  return (

    <View style={ styles.item }>

      <CheckBox
        value={ isSelected }
        onValueChange={ setSelection }

      />
      <View style={ styles.text }>
        <Text style={ isSelected ? styles.checkbox : styles.noCheckBox }>{ item.text }</Text>
      </View>
      <CustomButton text="Delete" onPress={ () => deleteItem(item.id) } />

    </View>



  )
}

export default Item;


const styles = StyleSheet.create({

  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    elevation: 3,

    marginBottom: 10,

  },
  text: {
    justifyContent: "flex-start",
    width: '70%',
  },
  checkbox: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  noCheckBox: {
    textDecorationLine: "none",
    color: "black",
  }

});