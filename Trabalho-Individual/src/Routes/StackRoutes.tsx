import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Pages/Login";
import { BottomTabRoutes } from "./BottomTabRoutes";

export type ParametrosDaRota ={
  StackLogin:{name: string};
  StackTabsPages: {name: string};
}

const Stack = createNativeStackNavigator<ParametrosDaRota>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login}></Stack.Screen>
        <Stack.Screen
          name="StackTabsPages"
          component={BottomTabRoutes}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
