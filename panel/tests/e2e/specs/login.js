
describe("Login", () => {
  context("UI interaction", () => {
    beforeEach(() => {
      cy.visit("/panel/login");
    });

    it("displays errors on login", () => {
      cy.get("input[name=email]").type("homer@simpson.de");
      cy.get("input[name=password]").type("password123{enter}");
      cy.get(".kirby-login-view form")
        .should("have.attr", "data-invalid", "true");
      cy.url().should("include", "/login");
    });

    it("redirects to /site on success", () => {
      cy.fixture("users").then(users => {
        return users['admin'];
      }).then(user => {
        cy.get("input[name=email]").type(user.email);
        cy.get("input[name=password]").type(user.password + "{enter}");
        cy.get(".kirby-headline").should("contain", "Kirby Starterkit");
        cy.url().should("include", "/site");
      });
    });
  });

  context("cy.login()", () => {
    beforeEach(() => {
      cy.login("admin");
    });

    it("can visit /site", () => {
      cy.visit("/panel/site");
      cy.get(".kirby-headline").should("contain", "Kirby Starterkit");
    });

    it("can visit /users", () => {
      cy.visit("/panel/users");
      cy.get(".kirby-headline").should("contain", "Users");
    });
  });
});