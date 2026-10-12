echo "# Reto Karate   
Este proyecto contiene la automatización de la API de usuarios de [Serverest](https://serverest.dev) utilizando *Karate
DSL*.

## 📌 Estructura del Proyecto

- *src/test/resources/bdd* → Archivos .feature de cada endpoint
- *karate-config.js* → Configuración global y utilidades (generación de datos)
- *runnerKarate.java* → Clase runner para ejecutar los features

## 🚀 Endpoints Automatizados

- GET /usuarios → Listar usuarios
- POST /usuarios → Registrar usuario
- GET /usuarios/{_id} → Buscar usuario por ID
- PUT /usuarios/{_id} → Actualizar usuario
- DELETE /usuarios/{_id} → Eliminar usuario

## 🔧 Requisitos

- **Java:** Versión 11 o superior (Desarrollado y probado con Amazon Corretto 23)
- **Apache Maven:** Versión 3.9+ (Configurado globalmente en variables de entorno)
- **Git**

## 🚀 Ejecución de Pruebas (Backend - Karate)

A continuación se detallan los comandos necesarios para ejecutar la suite de pruebas desde la terminal. 

### 1. Ejecutar toda la suite completa (Secuencial)
Este comando busca y ejecuta todos los escenarios de prueba configurados en el proyecto en un solo hilo de ejecución, evitando colisiones en el flujo del CRUD:
```powershell
mvn test "-Dkarate.options=src/test/resources/bdd" "-Dkarate.parallel=1"
```

### 2. Ejecutar por un Tag específico
Para segmentar la ejecución utilizando las etiquetas definidas en los archivos `.feature`, ejecute:

* **Pruebas de Humo:**
  ```powershell
  mvn test "-Dkarate.options=--tags @smoke-test"
  ```

* **Pruebas de Regresión:**
  ```powershell
  mvn test "-Dkarate.options=--tags @regresion"
  ```

### 📊 Reportes de Evidencia
Al finalizar la ejecución con Maven, el reporte HTML detallado con las evidencias gráficas se genera automáticamente en la siguiente ruta:
`target/karate-reports/karate-summary.html`


## 👨‍💻 Autor

Jonathan Osorio Espinoza
