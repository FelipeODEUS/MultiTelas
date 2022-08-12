import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import TelaInicial from "../Telas/inicial";
import Instrucoes from "../Telas/instrucoes";

const Abas = createBottomTabNavigator();
const NavCompleta = () => {
  return(
    <Abas.Navigator>
      <Abas.Screen name = "Tela_Inicial"
                   component = {TelaInicial}/>
      <Abas.Screen name = "Instruções"
                   component = {Instrucoes}/>
    </Abas.Navigator>
  )
}

export default NavCompleta;