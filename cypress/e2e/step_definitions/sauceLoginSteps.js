import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage-Example'
import SauceDemoPage from "@pages/SauceDemoPage";

Given("estoy en la página de login de saucedemo", () => {
    cy.visit("/");
});

When("ingreso el usuario {string} y la contrasenia {string} y hago click el el boton login", (usuario,contrasenia) => {
    SauceDemoPage.realizarLogin(usuario,contrasenia)
});

Then("verifico ver el logo de la app en el homepage", () => {
    SauceDemoPage.verificarAppLogo();
});

Then("verifico ver mensaje de error específico Epic sadface: Sorry, this user has been locked out.", () => {
    SauceDemoPage.verificarErrorMessageLogin();
});
