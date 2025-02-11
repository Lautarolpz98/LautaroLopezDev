import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔥 Configuración de Firebase (copia los datos desde Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBmz8AdKREifGVUEzfUw3WkKVWDh5nZH84",
    authDomain: "lautarolopezdev-1114b.firebaseapp.com",
    projectId: "lautarolopezdev-1114b",
    storageBucket: "lautarolopezdev-1114b.firebasestorage.app",
    messagingSenderId: "1022700049680",
    appId: "1:1022700049680:web:19712239cfa511548dc195",
    measurementId: "G-56ZVTNQYL3"
  };
  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
