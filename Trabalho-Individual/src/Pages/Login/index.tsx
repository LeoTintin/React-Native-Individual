import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styled } from "./style";
import Banner from "../../Assets/CrunchyrollBanner.jpeg";
import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponents } from "../../Components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log("Valor do email: ", value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
    console.log("Valor da senha: ", value);
  };
  const handleLogin = () => {
    if (email === "") {
      Alert.alert("Credenciais invalidas");
    } else {
      navegando.navigate("StackTabsPages", { name: "Login" });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styled.container}>
        <Image
          style={{
            width: "100%",
            height: "15%",
          }}
          source={Banner}
          alt="fundobotao"
        />
        <Text style={styled.title}>
          Animes clássicos,filmes épicos e séries infinitas.Está tudo aqui!
        </Text>

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoPlaceholder="Digite seu email"
          recebendoValue={email}
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoPlaceholder="Digite sua senha"
          recebendoValue={password}
          recebendoTipoDoInput={true}
        />
        <ButtonComponents title="SEGUINTE" recebendoFuncao={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
}
