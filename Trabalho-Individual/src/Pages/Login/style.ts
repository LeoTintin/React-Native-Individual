import { Button, StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      gap: 15,
  },

  title:{
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    margin: 10

  },
  styleInput:{
    width:'90%',
    height:50,
    color: '#000',
    paddingLeft:20, 
    fontSize:20,
  },
  button:{
    backgroundColor: '#F47521',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    height:50,
 },

  textButton:{
    fontSize: 25,
    color: "#fff",
    fontWeight:'700'

  }

});
