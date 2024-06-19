import React from "react";
import { View, Image } from "react-native";
import { styled } from "../Home/style";
import { ButtonComponents } from "../../Components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";
import Banner from "../../Assets/CrunchyrollBanner.jpeg"

export function Exit(){
    const navegando = useNavigation();
    const handleLogout =() =>{
       navegando.navigate("StackLogin", {name:"Login"})

    }
    return(

        <View style={styled.container}>
             <Image
          style={{
            width: "100%",
            height: "15%",
            margin: 25
          }}
          source={Banner}
          alt="fundobotao"
        />
        <ButtonComponents title="SAIR" recebendoFuncao={handleLogout}/>
        </View>
    )
}