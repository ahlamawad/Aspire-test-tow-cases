

/// <reference types="Cypress" />
cy.on("uncaught:exception", (e) => {
return false;


});

describe('randoum test', () => {
  it('check the website open randomly different lang', () => {
    let websites= ["https://ae.almosafer.com/ar","https://ae.almosafer.com/en"]

    let RandomIndex = Math.floor(Math.random()*websites.length)

    cy.visit(websites[RandomIndex])


    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    
    if(RandomIndex==0) {
      cy.get('[data-testid="AutoCompleteInput"]').type("دبي");

    }else if (RandomIndex==1) {
      cy.get('[data-testid="AutoCompleteInput"]').type("dubai");
    }
})
})