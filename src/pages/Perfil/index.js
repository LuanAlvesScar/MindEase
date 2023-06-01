import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function PerfilScreen({ route }) {
  const navigation = useNavigation();
  const { selectedOptions } = route.params;
  const [nome, setNome] = useState(selectedOptions[0][1]);
  const [idade, setIdade] = useState(selectedOptions[1][1]);
  const [comentario, setComentario] = useState("");

  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleIdadeChange = (text) => {
    setIdade(text);
  };

  const handleComentarioChange = (text) => {
    setComentario(text);
  };

  const handleDeleteComentario = () => {
    setComentario("");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Icon name="account-circle" size={200} color="#0597F2" />
      </View>
      <View>
        <Text style={styles.title}>Perfil</Text>
      </View>
      <View style={styles.optionsContainer}>
        {selectedOptions.map((option, index) => (
          <View style={styles.option} key={index}>
            <Text style={styles.optionTitle}>{option[0]}</Text>
            <Icon name="edit" size={24} color="#000" onPress={handleGoBack} />
            <Text style={styles.optionButton}>{option[1]}</Text>
          </View>
        ))}
        
  
      </View>
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Diga sua semana"
          value={comentario}
          onChangeText={handleComentarioChange}
        />
        {comentario !== "" && (
          <Icon
            name="delete"
            size={24}
            color="#000"
            onPress={handleDeleteComentario}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCEFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    position: "absolute",
    top: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionsContainer: {
    width: "80%",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    fontSize: 18,
    marginRight: 10,
  },
  optionOpicao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionBotao: {
    fontSize: 18,
    marginRight: 10,
  },
  commentContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "#0597F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  commentInput: {
    flex: 1,
    marginRight: 60,
    height: 40,
  },
});

export default PerfilScreen;
