import Login from '../support/pages/LoginPage'

describe('Login', () => {
    it('Realizar login com sucesso', () => {
        Login.acessaLogin()
        Login.preencherLogin()
    }) 

})