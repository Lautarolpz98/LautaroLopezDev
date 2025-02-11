import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { auth } from "../services/firebaseConfig"; // Importa auth desde Firebase
import { signOut } from "firebase/auth"; // Importa signOut para cerrar sesión

const PortfolioScreen = ({ navigation }: any) => {
  const projects = [
    {
      name: "Card (Flutter)",
      repoUrl: "https://github.com/Lautarolpz98/Card_LautaroLopez",
      image: require("../assets/card.png"),
    },
    {
      name: "Boton animado (Flutter)",
      repoUrl: "https://github.com/Lautarolpz98/animated-button-flutter",
      image: require("../assets/button.png"),
    },
    {
      name: "MangApp (Flutter)",
      repoUrl: "https://github.com/Lautarolpz98/MangApp",
      image: require("../assets/mangapp.jpeg"),
    },
    {
      name: "Portfolio (ReactNative)",
      repoUrl: "https://github.com/Lautarolpz98/MangApp",
      image: require("../assets/LAUTARO.jpeg"),
    },
  ];

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error al abrir el enlace:", err)
    );
  };

  // 🔹 Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra la sesión en Firebase
      navigation.replace("Login"); // Navega a la pantalla de Login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* 🔹 Ícono de Logout en la esquina superior derecha */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out" size={24} color="#fff" />
        </TouchableOpacity>

        {/* 🔹 Círculo con tu foto de perfil */}
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <Image
              source={require("../assets/perfil.jpg")}
              style={styles.profileImage}
            />
          </View>
          {/* 🔹 Tu nombre debajo de la foto */}
          <Text style={styles.name}>LAUTARO LOPEZ DEV</Text>
          {/* 🔹 Descripción de tu perfil */}
          <Text style={styles.description}>
            Desarrollador Flutter | Enfoque en Experiencia de Usuario y Alto
            Rendimiento
          </Text>
          <Text style={styles.description}>
            Soy un desarrollador trainee especializado en Flutter, con
            experiencia en la creación de aplicaciones móviles intuitivas,
            eficientes y escalables. Me apasiona la tecnología y el aprendizaje
            continuo, por lo que actualmente también estoy adquiriendo
            conocimientos en React Native para ampliar mis habilidades en el
            desarrollo multiplataforma.
          </Text>
        </View>

        {/* 🔹 Sección "Contáctame" */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contáctame</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity
              onPress={() => openLink("https://github.com/Lautarolpz98")}
            >
              <Ionicons name="logo-github" size={32} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink("https://www.linkedin.com/in/lautaro-lopez-b56aa7305/")
              }
            >
              <Ionicons name="logo-linkedin" size={32} color="#0077B5" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openLink("https://www.instagram.com/lautaro_lauth/")
              }
            >
              <Ionicons name="logo-instagram" size={32} color="#E1306C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 🔹 Sección "Mis Proyectos" */}
        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>Mis Proyectos</Text>
          <View style={styles.techIcons}>
            <MaterialIcons name="code" size={40} color="#5dade2" />
            <Ionicons name="logo-react" size={40} color="#61DAFB" />
          </View>

          {/* 🔹 Scroll horizontal para las tarjetas */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.projectsGrid}
          >
            {projects.map((project, index) => (
              <View key={index} style={styles.projectCard}>
                <Image source={project.image} style={styles.projectImage} />
                <Text style={styles.projectName}>{project.name}</Text>
                <TouchableOpacity
                  style={styles.repoButton}
                  onPress={() => openLink(project.repoUrl)}
                >
                  <Text style={styles.repoButtonText}>Ver Repositorio</Text>
                </TouchableOpacity>
              </View>
            ))}
            {/* 🔹 Cuadro extra de "Próximo Proyecto" */}
            <View style={styles.projectCard}>
              <View style={styles.constructionIcon}>
                <MaterialIcons name="construction" size={50} color="#9197AE" />
              </View>
              <Text style={styles.projectName}>Próximo Proyecto</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#212f3d", // Fondo del color especificado
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#000", // Borde blanco
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Para que la imagen no salga del círculo
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Sombra en Android
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff", // Color blanco para el nombre
  },
  description: {
    fontSize: 15,
    color: "#fff",
    textAlign: "justify", // Justifica el texto
    marginTop: 10,
    paddingHorizontal: 20, // Agrega margen a los lados
    fontWeight: "bold",
    maxWidth: 350, // Limita el ancho del texto
    alignSelf: "center", // Centra el bloque de texto
  },
  contactSection: {
    marginBottom: 30,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff", // Color blanco para los títulos
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  projectsSection: {
    alignItems: "center",
    marginBottom: 30, // Para dar espacio abajo
  },
  techIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  projectsGrid: {
    flexDirection: "row", // Esto hace que los elementos se alineen en fila
    paddingVertical: 10, // Añadir un poco de espacio vertical entre los elementos
  },
  projectCard: {
    width: 220, // Ancho fijo para las tarjetas
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 15, // Espaciado entre las tarjetas
    padding: 10,
    alignItems: "center", // Centra el contenido horizontalmente
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Sombra en Android
  },
  projectImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center", // Centra el texto
  },
  repoButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  repoButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  constructionIcon: {
    justifyContent: "center", // Centra el ícono verticalmente
    alignItems: "center", // Centra el ícono horizontalmente
    marginBottom: 10,
    height: 120, // Altura fija para el contenedor del ícono
  },
});

export default PortfolioScreen;
