import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/prototipo-1.jpg")}
        style={styles.imageBackground}
      >
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="Digite um email..."
            style={styles.textInput}
            onChangeInput={(text) => setEmail(text)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Sua senha..."
            style={styles.textInput}
            onChangeInput={(text) => setSenha(text)}
          />

          <TouchableOpacity
            style={styles.buttom}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttomText}>Cadastrar</Text>
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
  containerHeader: {
    marginTop: "14%",
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
    marginTop: 28,
  },
  textInput: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  buttom: {
    backgroundColor: "#0597F2",
    width: "100%",
    borderRadius: 4,
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
