/// <reference types="cypress"/>

const el = require('../elements/CadastroElements').ELEMENTS

class Cadastro {
    acessaSite(){
        cy.visit('') 
    }

    alterarVersao(){
        cy.get(el.selectTheme)
         .select(el.selectThemV4)
        .should('have.value', 'bootstrap_theme_v4')
    }

    preencherCadastro(){
        cy.get(el.buttonAddCustomer).click()
        cy.get(el.inputName).type('Teste Sicredi')
        cy.get(el.inputLastName).type('Teste')
        cy.get(el.inputContactFirstName).type('Alexandre')
        cy.get(el.inputPhone).type('51 9999-9999')
        cy.get(el.inputAddressLine1).type('Av Assis Brasil, 3970')
        cy.get(el.inputAddressLine2).type('Torre D')
        cy.get(el.inputCity).type('Porto Alegre')
        cy.get(el.inputState).type('RS')
        cy.get(el.inputPostalCode).type('91000-000')
        cy.get(el.inputCountry).type('Brasil')
        cy.get(el.selectfromEmployeer).click()
        cy.get(el.selectfromEmployeer2).click()
        cy.get(el.inputCreditLimit).type('200')
        cy.get(el.buttonSave).click()
    }

    valiarMensagemCadastro(){
        cy.get(el.mensagemCadastro).should('contain', 'Your data has been successfully stored into the database. Edit Customer or Go back to list')
    }

    acessarPageCustomerPeloLink(){
        cy.get(el.linkGoBackToList).click()
    }

    pesquisarCliente(){
        cy.get(el.InputPesquisa).type('Teste Sicredi')
    }

    deletarCadastro(){
        cy.get(el.checkboxCliente).click()
        cy.get(el.buttonDelete).click()
        cy.get(el.alertMensagem).should('contain', 'Are you sure that you want to delete those 10 items?')
        cy.get(el.alertButtonDelete).click()
    }

    valiarMensagemDelete(){
        cy.get(el.mensagemDelete).should('contain', 'Your data has been successfully deleted from the database.')
    }


}

export default new Cadastro()