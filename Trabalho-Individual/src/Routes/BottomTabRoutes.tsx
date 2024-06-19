import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Pages/Home";
import { Exit } from "../Pages/Exit";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export type TabsParametrosDaRota = {
  TabsHome: { name: string };
  StackTabsPages: { name: string };
};

const Tab = createBottomTabNavigator();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
        },
        headerStyle: {
          backgroundColor: "black",
        },
        tabBarLabel: "",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <View 
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon style={{ marginTop:15}}icon={faHouse} color="#fff" size={30} />
            </View>
          ),
          tabBarLabel: "",
        }}
        name="TabHome"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon style={{ marginTop:15}} icon={faCircleXmark} color="#fff" size={30} />
            </View>
          ),
          tabBarLabel: "",
        }}
        name="TabProfile"
        component={Exit}
      />
    </Tab.Navigator>
  );
}
