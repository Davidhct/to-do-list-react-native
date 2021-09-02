import React, { useState } from 'react';
import CustomButton from './customButton';
import { StyleSheet, View, Text, Button } from "react-native";

const Item = ({ item, deleteItem }) => {

  return (

    <View style={ styles.item }>
      <Text>{ item.text }</Text>
      <CustomButton text="X" onPress={ () => deleteItem(item.id) } />
    </View>


  )
}

export default Item;


const styles = StyleSheet.create({



  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 10,
    paddingLeft: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '100%'

  }
});