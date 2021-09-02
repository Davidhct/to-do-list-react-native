import React, { useState } from 'react';
import CustomButton from './customButton';
import { StyleSheet, View, Text, Button } from "react-native";

const Item = ({ item, deleteItem }) => {

  return (

    <View style={ styles.item }>
      <Text>{ item.text }</Text>
      <CustomButton text="Delete" onPress={ () => deleteItem(item.id) } />
    </View>


  )
}

export default Item;


const styles = StyleSheet.create({
  // itemContainer: {

  //   shadowColor: 'black',
  //   shadowOpacity: 0.26,
  //   shadowOffset: { width: 6, height: 2 },
  //   shadowRadius: 15,
  //   elevation: 3,
  //   backgroundColor: 'white',
  //   marginBottom: 10,
  //   borderRadius: 10,

  // },


  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "white",
    padding: 10,
    paddingLeft: 10,
    // borderBottomColor: 'white',
    // borderBottomWidth: 2,
    width: '79%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 30,
    elevation: 2,

    marginBottom: 10,



  }
});