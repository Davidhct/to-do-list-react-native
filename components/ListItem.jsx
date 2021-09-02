import React from 'react';

import { StyleSheet, FlatList, View } from "react-native";
import Item from './Item';



const ListItem = ({ items, deleteItem }) => {

  const renderItem = ({ item }) => (
    <Item item={ item } keyExtractor={ item.id } deleteItem={ deleteItem } />

  );

  return (
    <View style={ items[0] ? styles.list : null }>
      <FlatList data={ items } renderItem={ renderItem } />
    </View>
  )
}


export default ListItem;


const styles = StyleSheet.create({
  list: {

    padding: 3,
    // borderColor: "blue",
    // borderWidth: 1,
    // backgroundColor: "silver",
    width: '95%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 7,
    backgroundColor: 'white'
  }

});