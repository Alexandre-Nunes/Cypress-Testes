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
    Cadastro.acessarPageCustomerPeloLink()
 
 })
 
 When('pesquiso pelo cliente Teste Sicredi', () => {
    Cadastro.pesquisarCliente()
 })
 
 And('deleto o cadastro', () => {
   Cadastro.deletarCadastro()

 })
 
 Then('o cadastro e deletado com sucesso', () => {
    Cadastro.valiarMensagemDelete()
 })
 