import React, {Component} from "react";
import {Text, View} from 'react-native';

export default class Instrucoes extends Component{
  render(){
    return(
      <View style = {{flex: 1, alignItems:'Center', justifyContent: "Center"}}>
        <Text> Instruções </Text>
      </View>
    )
  }
}