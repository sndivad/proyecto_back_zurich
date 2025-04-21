# Pruebas Automatizadas con Cucumber, Chai, Axios y TypeScript

Este proyecto es una configuración base para pruebas automatizadas utilizando Cucumber, Chai y Axios en TypeScript. El objetivo principal es realizar pruebas de integración con un enfoque modular y siguiendo buenas prácticas.

---

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Cómo Ejecutar las Pruebas](#cómo-ejecutar-las-pruebas)
5. [Generar Reportes](#generar-reportes)

---

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 16.x o superior recomendada)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- [TypeScript](https://www.typescriptlang.org/) (se instalará como dependencia del proyecto)

Para verificar que tienes Node.js y npm instalados, ejecuta en tu terminal:

```bash
node -v
```
```bash
npm -v
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sndivad/proyecto_back_zurich.git

2. Entra al directorio del proyecto:
   ```bash
   cd proyecto-back-zurich
   ```
   
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Estructura del proyecto

Este proyecto está organizado de la siguiente manera:

 ```
proyecto-back-zurich/
├── package.json           # Configuración de dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── cucumber.js            # Configuración de Cucumber
├── README.md              # Documentación del proyecto
├── src/
│   └── apiClient.ts       # Lógica de cliente HTTP con Axios
├── features/
│   ├── example.feature     # Escenarios básicos de prueba
│   ├── createUser.feature  # Escenario para crear un usuario
│   └── step_definitions/
│       ├── steps.ts         # Definiciones generales de pasos
│       └── createUserSteps.ts  # Pasos para el escenario de crear usuario
├── cucumber_report.json   # Archivo generado de reporte en formato JSON
└── cucumber_report.html   # Reporte en formato HTML (después de la ejecución)

 ```

## Cómo Ejecutar las Pruebas
1. Asegúrate de haber instalado las dependencias con npm install.
   
2. Ejecuta las pruebas con el siguiente comando:

```bash
npm test
 ```
Esto ejecutará los escenarios definidos en los archivos .feature y mostrará el progreso en la consola.


## Generar Reportes
El proyecto está configurado para generar un reporte en formato HTML, que incluye el detalle de los escenarios y pasos ejecutados.

1. Al ejecutar las pruebas con **`npm test`**, se generará un archivo **`cucumber_report.json`**.


