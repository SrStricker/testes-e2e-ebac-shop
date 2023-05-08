// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('addProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.search').type(produto)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click()
    cy.get('.product-block')
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')

})

Cypress.Commands.add('editarEntrega', (nome, sobrenome, empresa, pais, endereço, numero, cidade, estado, cep) => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()
    cy.get('#shipping_first_name').clear().type(nome)
    cy.get('#shipping_last_name').clear().type(sobrenome)
    cy.get('#shipping_company').clear().type(empresa)

   
    cy.get('#select2-shipping_country-container').click().type(pais).get('[ aria-selected="true"]').click()
    cy.get('#shipping_address_1').clear().type(endereço)
    cy.get('#shipping_address_2').clear().type(numero)
    cy.get('#shipping_city').clear().type(cidade)
    cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
    cy.get('#shipping_postcode').clear().type(cep)
   
    cy.get(':nth-child(2) > .button').click()
    cy.get('.woocommerce-message').should('contain', "Endereço alterado com sucesso.")


})