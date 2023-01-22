describe("River Renters rent a rig display", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      fixture: "./raftData.json",
    }).visit("https://river-renters.herokuapp.com/");
  });

  it("should display the navigation bar", () => {
    cy.url().should("include", "/");
    cy.get("img")
      .first()
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/RiverRenters-logo.324504085a11ddff518d.png"
      );
    cy.get("nav").should("exist");
    cy.get("button").first().should("have.text", "RENT A RIG");
    cy.contains("YOUR RENTALS");
    cy.contains("ABOUT");
  });

  it("should display a hero image", () => {
    cy.get(".homeImage")
      .should("have.attr", "src")
      .should("include", "/static/media/Rafting-4.9adad4cd8555a79ca4ca.png");
  });

  it("should display rent a rig section", () => {
    cy.get(".rentARigSection");
    cy.get("h1").should("have.text", "RENT A RIG");
    cy.get("p")
      .first()
      .should(
        "have.text",
        "All our available rafting rig setups are listed below. Click on any of the to learn more and rent it."
      );
    cy.contains(
      "Oh no! It looks like we don't have any available rigs right now!"
    ).should("not.exist");
  });

  it("should show three drop downs, allowing the user to filter", () => {
    cy.get(".form").should("exist");
    cy.get("select").first().select("Maravia");
    cy.get("select").last().select("200, 1000");
    cy.get(".filterBtn").click();
    cy.get(".rigCard").should("have.length", 1);
  });

  it("should display several rig cards with raft info", () => {
    cy.get(".rigCard")
      .should("have.length", 5)
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

  it("should display error message if data is missing", () => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      statusCode: 500,
      fixture: "./raftData.json",
    })
      .visit("https://river-renters.herokuapp.com/")
      .contains(
        "Oh no! It looks like we don't have any available rigs right now!"
      );
  });
});
