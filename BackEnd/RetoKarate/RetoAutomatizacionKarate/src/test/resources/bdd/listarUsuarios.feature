Feature: Api (GET /usuarios - Listar usuarios)

  Background:
    * url baseUrl
    * configure ssl = true
    * def schemaListaUsuarios = { quantidade: '#number', usuarios: '#array' }
    * def schemaUsuarioIndividual = { nome: '#string', email: '#string', password: '#string', administrador: '#string', _id: '#string' }

  @ListUser-1 @listarusuario @smoke-test @regresion
  Scenario: CP GET Usuario - Http 200 - Listar Usuario - OK
    Given path 'usuarios'
    When method get
    Then status 200
    And match response == schemaListaUsuarios
    And match response.quantidade == '#? _ >= 0'
    And match each response.usuarios == schemaUsuarioIndividual
    * print 'Cantidad total de usuarios en el sistema:', response.quantidade
