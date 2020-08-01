# language: pt

Funcionalidade: CRUD Clientes
    Eu como usuário do sistema
    Quero cadastrar, pesquisar e deletar clinets no sistema
    Para ter um controle maios sobre os dados dos clientes.

Cenario: Realizar cadastro de um cliente com sucesso
    Dado que acesso o site da bootstrap_theme 
    Quando altero a versao para Bootstrap V4 Theme
    E submeto os dados de um cliente
    Entao o cliente e cadastrado com sucesso

Cenario: Pesquisar e Deletar um cadastro com sucesso.
    Dado que acesso a pagina de customer pelo link Go back to list
    Quando pesquiso pelo cliente Teste Sicredi
    E deleto o cadastro
    Entao o cadastro e deletado com sucesso




