import { Given, When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

// Variables globales para compartir datos entre pasos
let response: AxiosResponse;
let userData: { name: string };

Given('que tengo los datos del usuario {string}', function (userName: string) {
  // Se prepara el objeto con los datos que se enviarán en el POST.
  userData = { name: userName };
});

When('realizo una llamada POST al endpoint {string}', async function (endpoint: string) {
  // Se define la URL base de la API (mockapi) donde se agregarán los usuarios.
  const baseURL = 'https://680537f4ca467c15be68936d.mockapi.io/users';
  try {
    // Se concatena la URL base con el endpoint definido en el feature.
    response = await axios.post(`${baseURL}${endpoint}`, userData);
  } catch (error: any) {
    // Si ocurre un error (por ejemplo, código distinto), se captura la respuesta del error.
    if (error.response) {
      response = error.response;
    } else {
      throw error;
    }
  }
});

Then('el código de estado de la respuesta debe ser {string}', function (expectedStatus: string) {
  // Se valida que el status de la respuesta coincida con el esperado.
  expect(response.status.toString()).to.equal(expectedStatus);
});


Then('el nombre del usuario en la respuesta debe ser {string}', function (expectedName: string) {
  // Se valida que el objeto devuelto incluya el nombre correcto.
  expect(response.data.name).to.equal(expectedName);
});

Then('verificar que el valor testingvalue es un booleano', () => {
  // si se cambia el valor de testingvalue a un string en el schema de la api, la prueba fallará.
  expect(response.data.testingvalue).to.be.a('boolean');
})

Then('la respuesta debe ser un array', function () {
    // Verificamos que el cuerpo de la respuesta sea un array
    expect(response.data).to.be.an('array');
  });

When('realizo una llamada GET al endpoint {string}', async function (endpoint: string) {
    const baseURL = 'https://680537f4ca467c15be68936d.mockapi.io/users';
    try {
      // Realizamos la solicitud GET al endpoint especificado
      response = await axios.get(`${baseURL}${endpoint}`);
    } catch (error: any) {
      // Si ocurre un error (por ejemplo, un código de estado inesperado), capturamos la respuesta del error
      if (error.response) {
        response = error.response;
      } else {
        throw error;
      }
    }
  });
