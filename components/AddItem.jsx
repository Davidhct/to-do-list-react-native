
import React, { useState } from 'react';
import CustomButton from './customButton';
import { StyleSheet, View, Alert, TextInput } from "react-native";




const AddItem = ({ addItem }) => {

  const [item, setText] = useState('');
  const [identifier, setId] = useState('0');

  const onChangeInput = (enteredText) => {


    setText({ id: identifier, text: enteredText.trim() })

  }


  const onPreesbtn = () => {
    if (!item.text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }])
    } else {
      let toStr = Number(identifier) + 1;
      toStr = String(toStr)
      setId(toStr);
      addItem(item);
      setText("")
    }

  }
  return (
    <View style={ styles.list }>
      <TextInput placeholder="Enter todos" style={ styles.inputText } onChangeText={ onChangeInput } value={ item.text } />
      <CustomButton text="ADD" onPress={ onPreesbtn } />
    </View>
  )
}

export default AddItem;


const styles = StyleSheet.create({

  inputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 25,
  },
  button: {
    color: "red",
  }


});