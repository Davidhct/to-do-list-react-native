
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [allItems, setItems] = useState([])

  const addItem = (item) => setItems(prevItems => [item, ...prevItems])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })

  }


  return (
    <View style={ styles.container }>
      <Header />
      <AddItem addItem={ addItem } />
      <View style={ styles.list }>
        <ListItem items={ allItems } deleteItem={ deleteItem } />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F5F5F5",
    // padding: 30,

  },
  inputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,

  },


  list: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",

  }

});
