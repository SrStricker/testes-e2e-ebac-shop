
class EditarFaturamento {

    editFaturamento(nome, sobrenome, empresa, pais, endereço, numero, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)

        cy.get('#select2-billing_country-container').click().type(pais).get('[ aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereço)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)


    }
}
export default new EditarFaturamento()
