import React, {Component} from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import netflix_data from "../Banco_dados_Netfilx";

export default class Netflix extends Component{
  constructor(){
    super();
    this.state = {
      entrada: "",
      nome: "",
      faixaetaria: "",
      duracao: "",
    }
  }
  render(){
    return(
      <View style = {styles.elements}>
        <Image style = {styles.netfliximg}
               source = {require("../assets/Netflix.png")}/>
        <Text style = {styles.texto}> Netflix</Text>
        <TextInput style = {styles.input}
                   onChangeText = {texto => {
                     this.setState({
                       entrada: texto,
                     })
                     }}
                   value = {this.state.entrada}
                   placeholder = {"Pesquise aqui"}
                   placeholderTextColor = {"black"}
                   />
      <TouchableOpacity style = {styles.button}
                        onPress = {() => {
                        var letrinha = this.state.entrada.toLowerCase();
                        netflix_data[letrinha] ? (this.setState({nome: netflix_data[letrinha].nome}),
                                                 this.setState({faixaetaria: netflix_data[letrinha].faixaetaria}),
                                                 this.setState({duracao: netflix_data[letrinha].duracao}))
                                               : alert(" Não está na netflix ou no nosso banco de dados!!")
                        }}>
        <Text style = {styles.letra}> Pesquisar </Text>
      </TouchableOpacity>
      <Text style = {styles.nome}> {this.state.nome} </Text>
      <Text style = {styles.nome}> {this.state.faixaetaria} </Text>
      <Text style = {styles.nome}> {this.state.duracao} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  elements: {
    alignItems:'center', 
    justifyContent: "center"
  },
  netfliximg: {
    width: 150,
    height: 150,
  },
  texto:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  input: {
    width: "80%",
    height: 30,
    alignSelf: "center",
    textAlign: "center",
    borderWidth: 3,
    backgroundColor: "red",
    fontWeight: "bold",
    marginTop: 15,
  },
  button: {
    backgroundColor: "black",
    marginTop: 17,
    height: 30,
  },
  letra: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  nome: {
    marginTop: 5,
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  }
})