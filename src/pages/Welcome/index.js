import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/prototipo-1.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/logo-01.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}
        >
          <Text style={styles.title}>
            Esse aplicativo lhe oferece um medidor da sua saúde psicológica
          </Text>
          <Text style={styles.text}>Faça o login para começar.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0597F2",
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    marginTop: "5%",
  },

  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#4f5659",
  },
  button: {
    position: "absolute",
    backgroundColor: "#0597F2",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
