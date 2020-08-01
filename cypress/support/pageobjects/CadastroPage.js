/// <reference types="cypress"/>

const el = require('../elements/CadastroElements').ELEMENTS

class Cadastro {
    acessaSite(){
        cy.visit('') 
    }

    alterarVersao(){
        cy.get('#switch-version-select')
         .select('bootstrap_theme_v4')
        .should('have.value', 'bootstrap_theme_v4')
    }

    preencherCadastro(){
        cy.get('.floatL.t5 > .btn').click()

        cy.get('#field-customerName').type('Teste Sicredi')
        cy.get('#field-contactLastName').type('Teste')
        cy.get('#field-contactFirstName').type('Alexandre')
        cy.get('#field-phone').type('51 9999-9999')
        cy.get('#field-addressLine1').type('Av Assis Brasil, 3970')
        cy.get('#field-addressLine2').type('Torre D')
        cy.get('#field-city').type('Porto Alegre')
        cy.get('#field-state').type('RS')
        cy.get('#field-postalCode').type('91000-000')
        cy.get('#field-country').type('Brasil')

        cy.get('.chosen-single').click()
        cy.get('[data-option-array-index="8"]').click()

        cy.get('.chosen-single').type('200')

        cy.get('#form-button-save').click()
       
    }

    valiarMensagemCadastro(){
        cy.get('#report-success').should('contain', 'Your data has been successfully stored into the database. Edit Customer or Go back to list')
    }
}

export default new Cadastro()