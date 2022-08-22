import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import TelaInicial from "../Telas/inicial";
import Instrucoes from "../Telas/instrucoes";

const Abas = createBottomTabNavigator();
const NavCompleta = () => {
  return(
    <Abas.Navigator screenOptions={({ route })=>({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === "Tela Inicial"){
                iconName = "albums-outline";
              } else if(route.name === "Instruções"){
                iconName = "create-outline";
              }
              return(
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              )
            }
          })}
            tabBarOptions={{
              activeTintColor: "black",
              inactiveTintColor: "#FFFFFF",
              style: {
                height: 90,
                borderTopWidth: 0,
                backgroundColor: "#8723A1",
              },
              labelStyle: {
                fontSize: 20,
                fontFamily: "Rajdhani_600SemiBold"
              },
              labelPosition: "beside-icon",
              tabStyle: {
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 20,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8723A1"
              }
            }}
          >
      <Abas.Screen name = "Tela Inicial"
                   component = {TelaInicial}/>
      <Abas.Screen name = "Instruções"
                   component = {Instrucoes}/>
    </Abas.Navigator>
  )
}

export default NavCompleta;