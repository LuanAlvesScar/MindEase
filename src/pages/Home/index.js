import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  CheckBox,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [selectedTitles, setSelectedTitles] = React.useState([]);


  const handleCheck = () => {
    setChecked(!isChecked);
    if (isChecked) {
      setSelectedTitles(selectedTitles.filter(title => title !== 'TDAH'));
    } else {
      setSelectedTitles([...selectedTitles, 'TDAH']);
    }
  };
  const handleCheck1 = () => {
    setChecked1(!isChecked1);
    if (isChecked1) {
      setSelectedTitles(selectedTitles.filter(title => title !== 'Ansiedade'));
    } else {
      setSelectedTitles([...selectedTitles, 'Ansiedade']);
    }
  };
  const handleCheck2 = () => {
    setChecked2(!isChecked2);
    if (isChecked2) {
      setSelectedTitles(selectedTitles.filter(title => title !== 'Depressão'));
    } else {
      setSelectedTitles([...selectedTitles, 'Depressão']);
    }
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
          
            <Text style={styles.text}>Marque com qual você se identifica!</Text>
          

        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <View style={styles.marca}>
            <Text style={styles.title}>TDAH</Text>
            <CheckBox
              style={styles.caixab}
              value={isChecked}
              onValueChange={handleCheck}
            />
          </View>
          <View style={styles.boxd}>
            <Text style={styles.descricao}>
              TDAH é a sigla para Transtorno do Déficit de Atenção e
              Hiperatividade, que é um transtorno neuropsiquiátrico comum que
              afeta crianças e adultos. É caracterizado por dificuldades
              persistentes de atenção, hiperatividade e impulsividade, que
              interferem no funcionamento diário e no desenvolvimento da pessoa.
            </Text>
          </View>

          <View style={styles.marca}>
            <Text style={styles.title}>Ansiedade</Text>
            <CheckBox
              style={styles.caixan}
              value={isChecked1}
              onValueChange={handleCheck1}
            />
          </View>
          <View style={styles.boxd}>
            <Text style={styles.descricao}>
              A ansiedade é uma resposta natural do corpo a situações percebidas
              como ameaçadoras ou estressantes. É uma emoção normal e até útil
              em certas circunstâncias, pois nos prepara para enfrentar desafios
              e perigos. No entanto, quando a ansiedade se torna excessiva,
              persistente e começa a interferir nas atividades diárias e no
              bem-estar geral, pode ser um sinal de um transtorno de ansiedade.O
              transtorno de ansiedade é uma condição mental caracterizada por
              uma preocupação intensa e persistente, medo excessivo e apreensão.{" "}
            </Text>
          </View>

          <View style={styles.marca}>
            <Text style={styles.title}>Depressão</Text>
            <CheckBox
              style={styles.caixam}
              value={isChecked2}
              onValueChange={handleCheck2}
            />
          </View>
          <View style={styles.boxd}>
            <Text style={styles.descricao}>
              A depressão é um transtorno mental que afeta negativamente o
              humor, os pensamentos, o comportamento e o bem-estar emocional de
              uma pessoa. É uma condição mais séria do que apenas sentir-se
              triste ou desanimado temporariamente. A depressão é caracterizada
              por uma persistente sensação de tristeza, desesperança e perda de
              interesse ou prazer em atividades cotidianas.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttom}
            onPress={() => navigation.navigate("TelaInformacoes", { selectedTitles })}
          >
            <Text style={styles.buttomText}>Clique aqui se já marcou</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  marca: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  caixab: {
    left: 90,
    marginLeft: "64%",
    marginTop: "8%",
  },
  caixan: {
    left: 90,
    alignSelf: "flex-end",
    marginLeft: "55%",
  },
  caixam: {
    left: 90,
    alignSelf: "flex-end",
    marginLeft: "55%",
  },
  boxd: {
    border: "1px solid #000",
    borderRadius: "10px",
    backgroundColor: "#0597F2",
  },
  descricao: {
    fontWeight: "bold",
    margin: 10,
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttom: {
    backgroundColor: "#0597F2",
    width: "100%",
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttomText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
 
});
