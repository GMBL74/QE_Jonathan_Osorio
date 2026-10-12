# language: es
Característica: Flujo de Compra de Productos

  Antecedentes:
    Dado que el usuario ha iniciado sesión con el perfil "standard"

  @caso04 @flujocompras @carrito @regresion @smoke-test
  Escenario: Agregar y verificar productos en el carrito de compras
    Cuando el usuario agrega el primer producto disponible al carrito
    Entonces el usuario accede al carrito de compras y verifica que el producto esté listado

  @caso05 @flujocompras @checkout @regresion
  Escenario: Completar el proceso de compra exitosamente 
    Cuando el usuario agrega el primer producto disponible al carrito
    Y procede a completar el formulario de checkout con "John", "Doe" y "12345"
    Y confirma la orden de compra final
    Entonces se debe visualizar el mensaje de éxito "Thank you for your order!"
