@Saucedemo
  Feature: Agregar y eliminar productos del carrito de compras de saucedemo en homepage

Background: 
Given estoy en la página de inicio de la aplicación

    @SauceAgregarProductoCarritoEnHomepage
    Scenario: agregar productos al carrito de compras desde homepage
      When Agrego el primer producto al carrito
      Then Verifico que el contador del carrito muestra 1

    @SauceEliminarProductoCarritoEnHomepage
      Scenario: eliminar productos del carrito de compras desde homepage
      And Agrego el primer producto al carrito
      When hago click en boton remove del producto agregado al carrito de compras
      Then Verifico que el contador del carrito no es visible
