describe("submitting a form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should submit a calculus into the form", () => {
    cy.get("input[name=amount]").focus().type(150.0).blur();

    cy.get("input[name=installments]").focus().type(3).blur();

    cy.get("input[name=mdr]").focus().type(4).blur();

    cy.get("p.box__result--text").should("have.length", 4);
  });

  it("should submit a calculus into the form with filter options", () => {
    cy.get("input[name=amount]").focus().type(150.0).blur();

    cy.get("input[name=installments]").focus().type(3).blur();

    cy.get("input[name=mdr]").focus().type(4).blur();

    cy.get("p.box__result--text").should("have.length", 4);

    cy.get('[data-testid="filter"]').click().should("have.class", "active");

    cy.get("input[name=15]").check();

    cy.get("p.box__result--text").should("have.length", 1);
  });

  it("should not submit a calculus into the form", () => {
    cy.get("input[name=amount]").focus().type(1500000.0).blur();

    cy.get("input[name=installments]").focus().type(13).blur();

    cy.get("input[name=mdr]").focus().type(0).blur();

    cy.get("p.box__result--text").should("not.have.length", 4);

    cy.get("small.error").should("be.visible");
  });
});
