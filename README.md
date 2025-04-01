# DenunciApp


## 📱 Descripción

DenunciApp es una aplicación móvil desarrollada con React Native y Expo que permite a los ciudadanos realizar denuncias de manera rápida y efectiva. La aplicación utiliza un agente de inteligencia artificial llamado "Hector" para facilitar el proceso de denuncia, y también proporciona un mapa interactivo donde se pueden visualizar las denuncias realizadas en el área.

## ✨ Características

- **Autenticación de Usuarios**: Sistema completo de registro e inicio de sesión
- **Mapa de Denuncias**: Visualización geográfica de las denuncias reportadas
- **Denuncias Asistidas**: Proceso de denuncia guiado por el asistente IA "Hector"
- **Interfaz Intuitiva**: Diseño amigable y fácil de usar
- **Modo Invitado**: Posibilidad de navegar sin registro para algunos servicios básicos

## 🛠️ Tecnologías Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand) (Gestión de Estado)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)

## 📋 Requisitos Previos

- Node.js (>= 14.0.0)
- npm o yarn
- Expo CLI
- iOS Simulator o Android Emulator (para pruebas locales)
- Expo Go app (para pruebas en dispositivos físicos)

## 🚀 Instalación

1. Clone el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-denuncia.git
   cd proyecto-denuncia
   ```

2. Instale las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicie el servidor de desarrollo:
   ```bash
   npm start
   # o
   yarn start
   ```

4. Siga las instrucciones en la terminal para abrir la aplicación en un emulador o en su dispositivo usando Expo Go.

## 📱 Estructura del Proyecto

```
.
├── assets/               # Imágenes e iconos de la aplicación
├── src/                  # Código fuente de la aplicación
│   ├── components/       # Componentes reutilizables
│   ├── navigation/       # Configuración de navegación
│   ├── screens/          # Pantallas de la aplicación
│   └── stores/           # Gestión de estado global con Zustand
├── App.tsx               # Punto de entrada principal
├── index.ts              # Registro de la aplicación
├── Color.ts              # Definición de colores para la app
└── package.json          # Dependencias del proyecto
```

## 📦 Componentes Principales

- **AuthNavigator**: Maneja la navegación entre pantallas de autenticación (Prelogin, Login, Register)
- **MainNavigator**: Maneja la navegación principal de la aplicación después del inicio de sesión
- **Button**: Componente reutilizable para botones con estilos personalizables
- **AuthInput**: Componente reutilizable para campos de formulario en pantallas de autenticación

## 🔒 Gestión de Autenticación

La aplicación utiliza Zustand para gestionar el estado de autenticación, almacenando la información del usuario y controlando el flujo de navegación basado en si el usuario ha iniciado sesión o no.

## 🗺️ Mapa de Denuncias

La pantalla principal incluye un mapa interactivo que muestra las denuncias reportadas, permitiendo a los usuarios visualizar patrones y áreas con mayor incidencia de problemas.

## 🤖 Asistente IA "Hector"

La aplicación incorpora a "Hector", un asistente de inteligencia artificial diseñado para guiar a los usuarios en el proceso de realizar denuncias de manera sencilla y efectiva.

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, abra un issue para discutir los cambios que le gustaría hacer antes de enviar un pull request.
