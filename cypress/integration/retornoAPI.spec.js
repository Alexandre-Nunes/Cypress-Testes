/// <reference types="Cypress" />

describe('Validar retorno da API de CEPs.', () => {
    
    it('Consulta CEP valido', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws/91060900/json/ ',
          body: {
            "cep": "91060-900",
            "logradouro": "Avenida Assis Brasil 3940",
            "complemento": "",
            "bairro": "São Sebastião",
            "localidade": "Porto Alegre",
            "uf": "RS",
            "ibge": "4314902"
           }
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(200)
          expect(res.body).to.have.property('cep')
          expect(res.body).to.have.property('cep', '91060-900')
          expect(res.body).to.have.property('logradouro')
          expect(res.body).to.have.property('logradouro', 'Avenida Assis Brasil 3940')
          expect(res.body).to.have.property('complemento')
          expect(res.body).to.have.property('bairro')
          expect(res.body).to.have.property('bairro', 'São Sebastião')
          expect(res.body).to.have.property('localidade')
          expect(res.body).to.have.property('localidade', 'Porto Alegre')
          expect(res.body).to.have.property('uf')
          expect(res.body).to.have.property('uf', 'RS')
          expect(res.body).to.have.property('ibge')
          expect(res.body).to.have.property('ibge', '4314902')
        })
    })

    it('Consulta CEP inexistente', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws/9999999999999999/json/ ',
          failOnStatusCode: false
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(400)
          expect(res.body).contains("Erro 400")

        })
    })

    it('Consulta CEP com formato inválido de letras', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws/abcdefg/json/ ',
          failOnStatusCode: false
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(400)
          expect(res.body).contains("Erro 400")

        })
    })

    it('Consulta CEP com formato inválido de alfanumérico', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws/0800058abcdefg/json/ ',
          failOnStatusCode: false
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(400)
          expect(res.body).contains("Erro 400")

        })
    })

    it('Consulta CEP com formato inválido, vazio', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws//json/ ',
          failOnStatusCode: false
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(400)
          expect(res.body).contains("Erro 400")

        })
    })

    it('Extra, Retorno so serviço', () => {
        cy.request({
          method: 'GET',
          url: 'https://viacep.com.br/ws/RS/Gravatai/Barroso/json/',
          body: [
            {
              "cep": "94085-170",
              "logradouro": "Rua Ari Barroso",
              "complemento": "",
              "bairro": "Morada do Vale I",
              "localidade": "Gravataí",
              "uf": "RS",
              "unidade": "",
              "ibge": "4309209",
              "gia": ""
            },
            {
              "cep": "94175-000",
              "logradouro": "Rua Almirante Barroso",
              "complemento": "",
              "bairro": "Recanto Corcunda",
              "localidade": "Gravataí",
              "uf": "RS",
              "unidade": "",
              "ibge": "4309209",
              "gia": ""
            }
          ]
        }).as('response')
    
        cy.get('@response').then(res => {
          expect(res.status).to.be.equal(200)
        
        })
    })
})



