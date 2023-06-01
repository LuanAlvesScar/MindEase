import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaInformacoes({ route }) {
  const navigation = useNavigation();
  const { selectedTitles } = route.params;
  const [selectedOptions, setSelectedOptions] = useState({});

  const informacoes = [
    {
      titulo: "TDAH",
      descricao:
        "TDAH (Transtorno do Déficit de Atenção e Hiperatividade):\n\n1-Dificuldade em prestar atenção a detalhes e manter o foco em tarefas.\n2-Hiperatividade, inquietação e dificuldade em permanecer sentado.\n3-Impulsividade, agindo sem pensar nas consequências.\n4-Dificuldade em seguir instruções e se organizar.\n5-Esquecimento frequente e perda de objetos.\n6-Dificuldade em esperar a vez e interrupção de outras pessoas.\nSe você se identifica de 1-2 topicos marque Bom, de 3-4 marque Médio e de 5-6 marque Grave!",
    },
    {
      titulo: "Ansiedade",
      descricao:
        "Ansiedade:\n\n 1-Preocupação excessiva e persistente em relação a várias áreas da vida.\n2-Sensação de apreensão, nervosismo e tensão.\n3-Irritabilidade e dificuldade em relaxar.\n4-Dificuldade em lidar com incertezas e eventos futuros.\n5-Sintomas físicos, como tremores, sudorese e palpitações.\n6-Evitar situações que desencadeiam ansiedade.\nSe você se identifica de 1-2 topicos marque Bom, de 3-4 marque Médio e de 5-6 marque Grave!",
    },
    {
      titulo: "Depressão",
      descricao:
        "Depressão:\n\n" +
        "1-Humor deprimido persistente e sensação de tristeza.\n" +
        "2-Perda de interesse ou prazer em atividades anteriormente apreciadas.\n" +
        "3-Alterações no apetite e no peso (perda ou ganho significativo).\n" +
        "4-Distúrbios do sono, como insônia ou sono excessivo.\n" +
        "5-Fadiga e perda de energia.\n" +
        "6-Sentimentos de culpa, inutilidade ou autodepreciação.\n" +
        "7-Dificuldade de concentração e tomada de decisões.\n" +
        "8-Pensamentos recorrentes de morte ou suicídio.\nSe você se identifica de 1-2 topicos marque Bom, de 3-5 marque Médio e de 6-8 marque Grave!",
    },
  ];

  const getInformacaoByTitulo = (titulo) => {
    return informacoes.find((informacao) => informacao.titulo === titulo);
  };

  const saveSelection = async (titulo, botao) => {
    try {
      const updatedSelectedOptions = {
        ...selectedOptions,
        [titulo]: botao,
      };
  
      const value = JSON.stringify(updatedSelectedOptions);
      await AsyncStorage.setItem("selectedOption", value);
  
      setSelectedOptions(updatedSelectedOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.informacaoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <View style={styles.box}>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.greenButton,
              selectedOptions[item.titulo] === "Bom" && styles.selectedButton,
            ]}
            onPress={() => saveSelection(item.titulo, "Bom")}
          >
            <Text style={styles.buttonText}>Bom</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.yellowButton,
              selectedOptions[item.titulo] === "Médio" && styles.selectedButton,
            ]}
            onPress={() => saveSelection(item.titulo, "Médio")}
          >
            <Text style={styles.buttonText}>Médio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.redButton,
              selectedOptions[item.titulo] === "Grave" && styles.selectedButton,
            ]}
            onPress={() => saveSelection(item.titulo, "Grave")}
          >
            <Text style={styles.buttonText}>Grave</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handlePerfilButtonPress = () => {
    navigation.navigate("Perfil", { selectedOptions: Object.entries(selectedOptions) });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/prototipo-1.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.containerLogo}>
          <Image
            source={require("../../assets/MindEase.png")}
            style={{ width: "70%" }}
            resizeMode="contain"
          />
        </View>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Sintomas:</Text>
          <Text style={styles.messageText}>
            Veja os sintomas e marque com quantos você se identifica nos botões
            abaixo:
          </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <FlatList
            data={selectedTitles.map(getInformacaoByTitulo)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <TouchableOpacity
            style={styles.buttonPerfil}
            onPress={handlePerfilButtonPress}
          >
            <Text style={styles.buttonTextPerfil}>Clique aqui se já marcou</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    marginTop: "5%",
  },
  containerLogo: {
    width: 300,
    height: 200,
    position: "absolute",
    top: 18,
    left: 90,
  },
  containerHeader: {
    marginTop: "12%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#DCEFFA",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  informacaoContainer: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#0597F2",
    padding: 10,
  },
  descricao: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  messageText: {
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 20,
  },
  greenButton: {
    backgroundColor: "green",
  },
  yellowButton: {
    backgroundColor: "yellow",
  },
  redButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#026873",
    fontWeight: "bold",
  },
  buttonPerfil: {
    backgroundColor: "#0597F2",
    width: "100%",
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextPerfil: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#026873",
  },
});  