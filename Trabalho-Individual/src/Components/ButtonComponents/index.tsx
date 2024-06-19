import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styled } from "./style";

type PropsButton = {
  title: string;
  recebendoFuncao?: () => void;
  recebendoBackgroundColor?: string;
  recebendoCorTexto?: string;
};

export function ButtonComponents({
  title,
  recebendoFuncao,
  recebendoBackgroundColor,
  recebendoCorTexto,


}: PropsButton) {
  return (
    <TouchableOpacity
      style={[
        styled.button,
        {
          backgroundColor: recebendoBackgroundColor ? recebendoBackgroundColor: "#F47521",
        },
      ]}
      onPress={recebendoFuncao}
    >
      <Text
        style={[
          styled.textButton,
          { color: recebendoCorTexto ? recebendoCorTexto : "#333" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
        // width: recebendoTamanho ? recebendoTamanho : "auto"