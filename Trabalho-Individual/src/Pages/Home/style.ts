import { Button, StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  title: {
    fontSize: 35,
  },
  styleInput: {
    borderWidth: 2,
    borderColor: "#000",
    width: "90%",
    height: 50,
    color: "#000",
    paddingLeft: 20,
    borderRadius: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#000",

    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
  },

  textButton: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "700",
  },

  boxArray: {
    backgroundColor: "#000",
    width: "80%",
  },

  titleArray: {
    fontSize: 35,
  },
  subTitleArray: {
    fontSize: 25,
  },
  idiomas: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: -285,
  },
  sinopse: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 11,
    marginBottom: 10,
  },

  recomendations: {
    fontSize: 21,
    color: "#fff",
    margin: 5,
    marginLeft: -140,
  }

});
