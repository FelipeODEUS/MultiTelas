import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HBOMax from "../Telas/HBO_Max";
import DisneyPlus from "../Telas/disney_plus";
import Netflix from "../Telas/netflix";
import NavCompleta from "./Navegassaom_de_abas";

const Gavetas = createDrawerNavigator();
const NavigationCompleta = () => {
  return(
    <Gavetas.Navigator>
      <Gavetas.Screen name = "Tela_Inicial"
                   component = {NavCompleta}/>
      <Gavetas.Screen name = "Netflix"
                   component = {Netflix}/>
      <Gavetas.Screen name = "HBO Max"
                   component = {HBOMax}/>
      <Gavetas.Screen name = "Disney Plus"
                   component = {DisneyPlus}/>
    </Gavetas.Navigator>
  )
}

export default NavigationCompleta;