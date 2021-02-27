describe("Vue Routes", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080")
  })
  
  it("Should visit intial component on page load", () => {
    cy.url().should("include", "8080/")
  })

  it("Should change to the Home URL when navigating to the Home component", () => {
    cy
      .get("footer").get("a:first").click()
      cy.url().should("include", "/about")
      .get("footer").get("a:last").click()
      cy.url().should("include", "/home")
  })

  it("Should change to the Home URL when navigating to the Home component", () => {
    cy
      .get("footer").get("a:last").click()
      cy.url().should("include", "/home")
      .get("footer").get("a:first").click()
      cy.url().should("include", "/about")
  })
})
