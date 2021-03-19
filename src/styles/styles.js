//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#f3f3f3",
  },
  logo: {
    marginBottom: 30,
  },
  inputBox: {
    alignItems: "center",
    justifyContent: "center",

    width: "80%",
    height: 50,

    marginTop: 10,

    borderColor: "#77dd77",
    borderWidth: 3,
    borderRadius: 8,
  },
  input: {
    width: "90%",
    height: 50,

    fontSize: 18,

    borderRadius: 8,
  },
  buttonSubmit: {
    alignItems: "center",
    justifyContent: "center",

    width: "40%",
    height: 50,

    marginTop: 20,

    backgroundColor: "#77dd77",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  decText: {
    fontSize: 18,
    color: "#000000",
  },
  error: {
    fontSize: 18,
    color: "#ff0000",
  },
});
