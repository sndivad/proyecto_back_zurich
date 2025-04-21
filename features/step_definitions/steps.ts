/**import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';

let response: any;
let endpoint: string;

Given('que tengo el identificador de un usuario {string}', function (id: string) {
  // Para este ejemplo, construimos el endpoint directamente.
  endpoint = `/users/${id}`;
});

When('realizo una llamada GET al endpoint {string}', async function (apiEndpoint: string) {
  const baseURL = "https://jsonplaceholder.typicode.com";
  try {
    response = await axios.get(`${baseURL}${apiEndpoint}`);
  } catch (error: any) {
    response = error.response;
  }
});

Then('el código de estado de la respuesta debe ser {string}', function (expectedStatus: string) {
  expect(response.status.toString()).to.equal(expectedStatus);
});
*/