# language: es
Característica: Autenticación de Usuarios

  Antecedentes:
    Dado que el usuario abre la página de inicio de sesión

  @caso01 @loginuser @regresion @smoke-test
  Escenario: Inicio de sesión exitoso con usuario estándar
    Cuando el usuario intenta autenticarse con el perfil "standard"
    Entonces el usuario es redirigido a la página de productos
  
  @caso02 @loginuser @regresion @smoke-test
  Escenario: Intento de inicio de sesión con usuario bloqueado
    Cuando el usuario intenta autenticarse con el perfil "locked_out"
    Entonces se debe mostrar el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  @caso03 @loginuser @regresion
  Escenario: Intento de inicio de sesión con credenciales incorrectas
    Cuando el usuario intenta autenticarse con el perfil "invalid"
    Entonces se debe mostrar el mensaje de error "Epic sadface: Username and password do not match any user in this service"
