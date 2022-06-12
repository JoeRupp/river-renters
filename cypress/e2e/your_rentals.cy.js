describe("River Renters your rentals display", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      fixture: "./raftData.json",
    }).visit("http://localhost:3000/");
    cy.intercept(
      "PATCH",
      "https://river-renters-api.herokuapp.com/api/v1/rigs/6"
    );
  });

  it("should be able to navigate to your rentals from the navigation bar", () => {
    cy.get(".btn").first().click();
    cy.url().should("include", "/your-rentals");
    cy.contains("It looks like you don't have any rentals right now!").should(
      "not.exist"
    );
  });

  it("should be able to navigate to your rentals with a url", () => {
    cy.visit("http://localhost:3000/your-rentals");
    cy.contains("All your current rentals can be found below:");
  });

  it("should display all current rentals", () => {
    cy.visit("http://localhost:3000/your-rentals");
    cy.get(".yourRentals").should("exist");
    cy.get(".rigCard")
      .should("have.length", 1)
      .last()
      .should(
        "have.text",
        "Maravia 14X24 Cataraft - fully riggedMaravia | Multi-day$215 per day"
      )
      .get("img")
      .last()
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/rigs-Maravia-6.ba9f7b8d37ad33426ea1.png"
      );
  });

  it("should show a message saying the user has no rentals if none are populated.", () => {
    cy.visit("http://localhost:3000/your-rentals");
    cy.get(".rigCard").first().click();
    cy.get("button").last().click();
    cy.url().should("include", "/your-rentals");
    cy.get(".rigCard").should("have.length", 0);
    cy.contains("It looks like you don't have any rentals right now!");
  });

  it("should go a 404 error page if the wrong url is entered", () => {
    cy.visit("http://localhost:3000/kjdjkdsjkd");
    cy.get("img")
      .last()
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/Rafting404Error.ce933bcc9b987f5f0aea.png"
      );
  });
});
