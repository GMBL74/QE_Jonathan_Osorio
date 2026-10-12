# Reto de Automatización QA – FrontEnd 🚀

---

## 🛠️ Decisiones de Arquitectura y Buenas Prácticas

Para garantizar una solución escalable, robusta y mantenible, se implementaron los siguientes patrones de diseño:

1. **Page Object Model (POM) Desacoplado:** 
Manejos de  clases independientes (`LoginPage`, `ProductsPage`, `CheckoutPage`)
2. **Modularidad en Step Definitions:** 
Estructuras de  archivos por dominios de negocio (`loginSteps.js` y `comprasSteps.js`), facilitando el mantenimiento futuro.
3. **Manejo Seguro de Datos de Prueba (Cero Hardcoding):** 
Se implementó un centralizador dinámico de perfiles (`config/users.js`) inyectado en memoria.
4. **Esperas Explícitas Basadas en Estados:**
Manejo de esperas  esperas inteligentes basadas en el estado del DOM (`{ state: 'visible' }`)
5. **Estrategia de Tagging Avanzada:** Los escenarios con tags (`@smoke-test`, `@regresion`, `@loginuser`) para una ejecucion ordenada 

---

## 📂 Estructura del Proyecto

```text
RetoWeb/
├── config/                  # Gestion de contraseña y usuario
│   └── users.js
├── features/                # Archivos feature  en Gherkin (BDD)
│   ├── compras.feature
│   └── login.feature
├── pages/                   # Componentes del Page Object Model (POM)
│   ├── CheckoutPage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── step_definitions/        #  Step Definitions centralizado 
│   ├── comprasSteps.js
│   └── loginSteps.js
├── cucumber.json            # Configuración de Cucumber
├── package.json             # Dependencias y scripts de Node.js
└── README.md                # Documentación 
```

---

## 🚀 Requisitos e Instalación

### Requisitos Previos
* **Node.js** (Versión 18 o superior)
* **Google Chrome** instalado localmente

### Configuración del Entorno
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd RetoWeb
   ```
2. Instala todas las dependencias del proyecto:
   ```bash
   npm install
   ```

---

## 🧪 Ejecución de Pruebas

El framework cuenta con diferentes  tags para su ejecucion


### Ejecutar por Etiquetas Específicas (Tags)

* **Solo el módulo de autenticación (Login):**
  ```bash
  npm test -- --tags "@loginuser"
  ```

* **Solo las validaciones del Carrito de Compras:**
  ```bash
  npm test -- --tags "@flujocompras"
  ```

* **Ejecutar la Suite Crítica de Humo (Smoke Test):**
  ```bash
  npm test -- --tags "@smoke-test"
  ```
