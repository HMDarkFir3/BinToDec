import { useState, useRef, FC } from "react";
import { SafeAreaView, View, Text, TextInput, Keyboard } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { styles } from "./styles";

export const Home: FC = () => {
  const [input, setInput] = useState<string>("");
  const [converted, setConverted] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<TextInput>(null);

  function onSubmit() {
    if (input === "") {
      setError("Digite algum número binário");
      return;
    }

    if (input.match(/^[0-1]+$/g) === null) {
      setError("Digite somente 1 ou 0");
      setInput("");
      return;
    }

    inputRef.current?.blur();

    Keyboard.dismiss();
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

      <Input
        ref={inputRef}
        value={input}
        placeholder="Digite o número binário"
        onChangeText={setInput}
        returnKeyType="send"
        onSubmitEditing={onSubmit}
        autoCorrect={false}
        keyboardType="numeric"
      />

      <View style={styles.convertedWrapper}>
        <Text style={styles.converted}>{converted}</Text>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Converter" onPress={onSubmit} />
    </SafeAreaView>
  );
};
