Feature: Crear un usuario utilizando POST

  Scenario: Agregar al usuario Manolo
    Given que tengo los datos del usuario "Manolo"
    When realizo una llamada POST al endpoint "/users"
    Then el código de estado de la respuesta debe ser "201"
    And el nombre del usuario en la respuesta debe ser "Manolo"
    And verificar que el valor testingvalue es un booleano

  Scenario: Verificar código de estado y que la respuesta sea un array
    When realizo una llamada GET al endpoint "/users"
    Then el código de estado de la respuesta debe ser "200"
    And la respuesta debe ser un array