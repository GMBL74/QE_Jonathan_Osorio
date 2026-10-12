Feature: Api (PUT /Actualizar usuario)

  Background:
    * url baseUrl
    * configure ssl = true
    * def schemaUsuarioActualizado = { message: '#string' }

  @ActUser-1 @actualizarusuario @smoke-test @regresion
  Scenario: CP PUT Usuario - Http 200 - Actualizar Usuario - OK
    * def resultadoRegistro = call read('file:src/test/resources/bdd/registrarUsuarios.feature@RegUser-1')
    * def userId = resultadoRegistro.response._id
    * print 'Usuario Registrado con ID:', userId
    * def newUser = resultadoRegistro.user
    * def updatedUser =
  """
  {
    "nome": "Usuario Actualizado",
    "email": "#(newUser.email)",
    "password": "#(securePassword)",
    "administrador": "false"
  }
  """
    Given path 'usuarios', userId
    And request updatedUser
    When method put
    Then status 200
    And match response == schemaUsuarioActualizado
    And match response.message == "Registro alterado com sucesso"
    * print 'Usuario actualizado con ID:', userId
