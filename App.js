//React
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

//Style
import { styles } from "./src/styles/styles";

//Icon
import { Octicons } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState("");
  const [converted, setConverted] = useState(null);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  function handleSubmit() {
    if (input === "") {
      setError("Digite algum número binário");
      return;
    }

    if (input.match(/^[0-1]+$/g) === null) {
      setError("Digite somente 1 ou 0");
      setInput("");
      return;
    }

    Keyboard.dismiss();
    inputRef.current?.blur();
    setInput("");
    setError(null);

    const convertDecimal = input.split("").map(Number).reverse();

    const result = convertDecimal.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );

    setConverted(result);
  }

  function closeInput() {
    inputRef.current?.blur();
    Keyboard.dismiss();
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
          ref={inputRef}
          value={input}
          placeholder="Digite o número binário"
          onChangeText={(value) => setInput(value)}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          autoCorrect={false}
          style={styles.input}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.decText}>{converted}</Text>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={handleSubmit}
        opacity={0.4}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
