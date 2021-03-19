//React
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

//Style
import { styles } from "./src/styles/styles";

//Icon
import { Octicons } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState("");
  const [converted, setConverted] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit() {
    if (input === "") {
      setError("Digite algum número binário");
      return;
    }

    if (input.match(/^[0-1]+$/g) === null) {
      setError("Digite somente 1 ou 0");
      return;
    }

    setInput("");
    setError(null);

    const convertDecimal = input.split("").map(Number).reverse();

    const result = convertDecimal.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );

    setConverted(result);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Octicons
        style={styles.logo}
        name="file-binary"
        color="#77dd77"
        size={150}
      />
      <View style={styles.inputBox}>
        <TextInput
          value={input}
          placeholder="Digite o número binário"
          onChangeText={(value) => setInput(value)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.decText}>{converted}</Text>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
