import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 28,
  },
  convertedWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 52,
    marginTop: 8,
    fontSize: 16,
    borderColor: "#77dd77",
    borderWidth: 3,
    borderRadius: 8,
  },
  converted: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#77dd77",
  },
  error: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff0000",
  },
});
