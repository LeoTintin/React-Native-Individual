import React from "react";
import { TextInput } from "react-native";
import { styled } from "./style";

type PropsComponent = {
  recebendoPlaceholder: string;
  recebendoValue: string;
  recebendoFuncao: (value: string) => void;
  recebendoTipoDoInput?: boolean;
  recebendoBackgroundColor?: string;
};

export function TextInputComponent({
  recebendoFuncao,
  recebendoPlaceholder,
  recebendoValue,
  recebendoTipoDoInput,
  recebendoBackgroundColor,
}: PropsComponent) {
  return (
    <TextInput
      onChangeText={recebendoFuncao}
      value={recebendoValue}
      style={[styled.styleInput, {
        backgroundColor: recebendoBackgroundColor ? recebendoBackgroundColor: '#333'
       }]}
      placeholder={recebendoPlaceholder}
      secureTextEntry={recebendoTipoDoInput}
    />
  );
}
