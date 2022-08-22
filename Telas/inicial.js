import React, {Component} from "react";
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

export default class TelaInicial extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source = {require("../assets/galaxia.jpg")} style = {styles.galax}>
         
         <Text style = {styles.grafit}> Em busca do nome </Text>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: "center",
  },
  galax:{
    flex: 1,
    width: 375,
    justifyContent: "center",
  },
    grafit: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  }
})

