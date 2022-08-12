import React, {Component} from "react";
import {Text, View} from 'react-native';

export default class TelaInicial extends Component{
  render(){
    return(
      <View style = {{flex: 1, alignItems:'Center', justifyContent: "Center"}}>
        <Text> Tela Inicial</Text>
      </View>
    )
  }
}