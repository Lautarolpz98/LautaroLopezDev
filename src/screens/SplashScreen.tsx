import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // Ir al login después de la animación
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animation.json")}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB", // Fondo celeste
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
