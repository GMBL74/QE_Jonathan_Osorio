# Reto técnico en vivo – Mantenimiento de frameworks de automatización

**Duración sugerida:** 60 minutos (25 min Backend · 25 min Frontend · 10 min conversación)

## Contexto

Estos son **tus** frameworks (`RetoKarate` para la API de ServeRest y `RetoWeb` para Sauce Demo).
El equipo los va a conectar a un pipeline de CI que usa **JDK 17**, **Linux sin interfaz gráfica** y
ejecuta `mvn clean test` y `npm test` sin parámetros adicionales. Mientras tanto, otro QA hizo un commit:

> `fix: limpieza de datos en registro y reintento de click por flakiness`

## Reglas

1. **No se permite** borrar escenarios, marcarlos como `@ignore`, ni debilitar validaciones.
2. Puedes usar documentación oficial y el navegador (DevTools).
3. **Piensa en voz alta**: hipótesis → verificación → decisión.
4. Al terminar cada capa, muestra `git diff` y ejecuta la suite completa.

---

## Capa 1 – Backend (Karate DSL · ServeRest)

```bash
cd BackEnd/RetoKarate/RetoAutomatizacionKarate
mvn clean test
```

**Nota del QA que hizo el cambio:** *"Agregué limpieza al escenario de registro para no dejar usuarios
de prueba en la API compartida."*

**Entregable:** `mvn clean test` (con **JDK 17**, sin parámetros extra) ejecuta **toda la suite (9
escenarios)** y termina en verde **dos veces seguidas**. Se debe mantener la limpieza del registro.

---

## Capa 2 – Frontend (Playwright + Cucumber · Sauce Demo)

```bash
cd Frontend/RetoWeb
npm ci
npx playwright install chromium
npm test
```

**Situación:** la suite está **en verde**. Sin embargo, **negocio reporta** que en el último despliegue
de la suite de regresión "todo pasó", pero al reproducir el flujo a mano **el pedido se confirma con
el carrito vacío**.

**Nota del QA que hizo el cambio:** *"Agregué un reintento al click de 'agregar al carrito' porque en
CI a veces no se registraba."*

**Entregables:**
- Explicar **por qué la suite no detectó el problema** y corregirlo para que **sí lo detecte**.
- Corregir la causa del carrito vacío.
- `npm test` en verde, ejecutable **sin interfaz gráfica** en CI y con el navegador visible en tu máquina.

---

## Conversación final (si queda tiempo)

- ¿Qué harías para que estos problemas **no vuelvan a llegar** al pipeline?
- ¿Qué cambiarías de tu propio diseño original después de ver estos fallos?
