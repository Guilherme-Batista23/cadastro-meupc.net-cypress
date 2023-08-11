describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {
    cy.visit('https://meupc.net/')

    //esperando 1 segundo para executar os comandos abaixo
    cy.wait(1000)

    //clicando no botão do menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()
 
    //Clicando no botão de cadastro
    cy.get('ul.menu-list')//Pegando a UL com a classe .menu-list
    .children('li') //Pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]').click() //pegando os filhos da ul

 
    cy.get('input[name="nome"]').type('Manoel Gomes') //Preenchendo o campo nome do cadastro
    cy.get('input[name="email"]').type('canetaazul@gmail.com') //Preenchendo o campo email do cadastro
    cy.get('input[placeholder="Defina uma senha"]').type('canetaazul123') //Preenchendo o campo senha do cadastro
    cy.get('input[type="checkbox"]').check({ force: true}) //preenchendo o check dos termos
    cy.contains('Cadastrar-se').click() //clicando no cadastrar-se

    cy.contains('Escolha seu nome de usuário').should('be.visible') //para validar o teste quando essa mensagem for visivel

  })
})