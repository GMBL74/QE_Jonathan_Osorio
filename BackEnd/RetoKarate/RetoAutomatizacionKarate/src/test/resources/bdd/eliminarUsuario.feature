Feature: Api (DELETE /Eliminar usuario)

  Background:
    * url baseUrl
    * configure ssl = true
    * def schemaUsuarioEliminado = { message: '#string' }
    * def schemaUsuarioNoEncontrado = { message: '#string' }

  @DeltUser-1 @eliminarusuario @smoke-test @regresion
  Scenario: CP DELETE Usuario - Http 200 - Eliminar usuarios - OK
    * def reponseUserId = call read('file:src/test/resources/bdd/registrarUsuarios.feature@RegUser-1')
    * def userId = reponseUserId.response._id
    Given path 'usuarios', userId
    When method delete
    Then status 200
    And match response == schemaUsuarioEliminado
    And match response.message == "Registro excluído com sucesso"
    * print 'Se elimino el usuario con ID:', userId


    Given path 'usuarios', userId
    When method get
    Then status 400
    And match response == schemaUsuarioNoEncontrado
    And match response.message == "Usuário não encontrado"
    * print 'Confirmado en base de datos: ', response.message
