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
    display: 'flex',
    justifyContent: "space-around",
    alignItems: "center",
    width: '95%',
  }

});