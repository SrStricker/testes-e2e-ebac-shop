/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

import EditarFaturamento from "../support/page_objects/faturamento-page.js";
const dadosEndereço = require('../fixtures/endereço.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */


  beforeEach(() => {
    cy.visit('/')
  });

  it.only('Fluxo de compra na automação', () => {
    cy.get('.icon-user-unfollow').click()
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.usuario, dados.senha)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    //login

    cy.editarEntrega(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.company.name(),
      "Brasil",
      faker.address.streetAddress(),
      faker.address.secondaryAddress(),
      faker.address.cityName(),
      "Paraná",
      faker.address.zipCode('#####-###'),

    ) //endereço de entrega por comando customizado

    cy.addProduto('Abominable Hoodie', 'M', 'Blue', 1)
    cy.addProduto('Grayson Crewneck Sweatshirt', 'L', 'White', 1)
    cy.addProduto('Thorpe Track Pant', '36', 'Purple', 1)
    cy.addProduto('Typhon Performance Fleece-lined Jacket', 'XL', 'Black', 1) 

    //produtos adicionados pela aba de 'busca'

    EditarFaturamento.editFaturamento(
      dadosEndereço[0].nome,
      dadosEndereço[0].sobrenome,
      dadosEndereço[0].empresa,
      dadosEndereço[0].pais,
      dadosEndereço[0].endereço,
      dadosEndereço[0].numero,
      dadosEndereço[0].cidade,
      dadosEndereço[0].estado,
      dadosEndereço[0].cep,
      dadosEndereço[0].telefone,
      dadosEndereço[0].email)
      //faturamento importado via page objects

    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

  })
})




