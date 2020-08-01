/* global Given, Then, When, And */

import Cadastro from '../pageobjects/CadastroPage'

///Cadastrar um novo cliente
Given('que acesso o site da bootstrap_theme', () => {
   Cadastro.acessaSite()
})

When('altero a versao para Bootstrap V4 Theme', () => {
    Cadastro.alterarVersao()
})

And('submeto os dados de um cliente', () => {
    Cadastro.preencherCadastro()

})

Then('o cliente e cadastrado com sucesso', () => {
    Cadastro.valiarMensagemCadastro()
})

///Pesquisar e Deletar um cadastro.
Given('que acesso a pagina de customer pelo link Go back to list', () => {
    Cadastro.acessaSite()
    Cadastro.alterarVersao()
    Cadastro.preencherCadastro()
    Cadastro.valiarMensagemCadastro()

    cy.get('[href="/demo/bootstrap_theme_v4/"]').click()
 
 })
 
 When('pesquiso pelo cliente Teste Sicredi', () => {
    cy.get(':nth-child(3) > .form-control').type('Teste Sicredi')
 })
 
 And('deleto o cadastro', () => {
    cy.get('.select-all-none').click()
    cy.get('.no-border-left > .floatL > .btn').click()

    cy.get('.alert-delete-multiple').should('contain', 'Are you sure that you want to delete those 10 items?')

    cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
    
    cy.get('[data-growl="message"] > p').should('contain', 'Your data has been successfully deleted from the database.')


 })
 
 Then('o cadastro e deletado com sucesso', () => {
    
 })
 