import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Header = () => (
  <View style={ styles.header }>
    <Text style={ styles.title }>Todo List App</Text>
  </View>
)


const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#228B22',

    // backgroundColor: 'darkslateblue',
  },
  title: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: "center",
  }

})

export default Header;