import React, {Component} from "react";
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

export default class TelaInicial extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source = {require("../assets/galaxia.jpg")} style = {styles.galax}>
         <Text style = {styles.grafit}> Instruções:</Text>
         <Text style = {styles.grafit}>
            O app tem o intuito de te mostrar qual plataforma tem o filme/serie que vc deseja sem ter que gastar um dinheiro á toa.Para usar o app é simples basta arrastar o seu dedo para a plataforma que deseja procurar o filme/serie.Caso a serie/filme tenha mais de uma palavra, digite tudo sem utilizar o espaço.
         </Text>
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
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  }
})

