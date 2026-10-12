Feature: Api (GET Buscar usuario por ID)

  Background:
    * url baseUrl
    * configure ssl = true
    * def schemaUsuarioId = { nome: '#string', email: '#string', password: '#string', administrador: '#string', _id: '#string' }
    * def schemaMensajeError = { message: '#string' }
    * def schemaIdFormatoInvalido = { id: '#string' }

  @LisUserId-1 @buscarusuarioporid @smoke-test @regresion
  Scenario: CP GET Usuario - Http 200 - Buscar usuario por Id - OK
    * def newUser = call randomUser
    Given path 'usuarios'
    And request newUser
    When method post
    Then status 201
    * def userId = response._id
    * print userId

    # Buscamos el usuario por su id
    Given path 'usuarios', userId
    When method get
    Then status 200
    * print response
    And match response == schemaUsuarioId
    And match response._id == userId
    And match response.email == newUser.email
    * print 'Usuario encontrado exitosamente:', response

  @LisUserId-2 @buscarusuarioporid @regresion
  Scenario: CP GET Usuario - Http 400 - Buscar usuario por ID inexistente - NoOK
    * def idInexistente = '1234567890abcdef'
    Given path 'usuarios', idInexistente
    When method get
    Then status 400
    And match response == schemaMensajeError
    And match response.message == "Usuário não encontrado"
    * print 'Error de usuario inexistente capturado:', response.message

  @LisUserId-3 @buscarusuarioporid @regresion
  Scenario Outline: CP GET Usuario - Http 400 - Parámetros de ID inválidos o vacíos - NoOK
    Given path 'usuarios', <idInvalido>
    When method get
    Then status 400
    And match response == schemaIdFormatoInvalido
    And match response.id == "id deve ter exatamente 16 caracteres alfanuméricos"
    * print 'Error de formato técnico capturado:', response.id

    Examples:

      | idInvalido |
      | '123'      |
      | '@#$%'     |