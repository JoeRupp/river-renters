describe("River Renters rig preview", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      fixture: "./raftData.json",
    }).visit("https://river-renters.herokuapp.com/");
    cy.intercept(
      "PATCH",
      "https://river-renters-api.herokuapp.com/api/v1/rigs/1"
    );
    cy.intercept(
      "PATCH",
      "https://river-renters-api.herokuapp.com/api/v1/rigs/6"
    );
  });

  it("should be able to navigate there from the rent a rig screen by selecting a rig card", () => {
    cy.get(".rigCard").first().click();
    cy.url().should("include", "/raft/1");
  });

  it("should be able to navigate there from your rentals screen by selecting a rig card", () => {
    cy.visit("https://river-renters.herokuapp.com/your-rentals");
    cy.get(".rigCard").first().click();
    cy.url().should("include", "/raft/6");
  });

  it("should display all boat information", () => {
    cy.get(".rigCard").first().click();
    cy.contains("NRS Expedition-136 - fully rigged");
    cy.contains("NRS | Multi-day");
    cy.contains(
      "The 13 ft 6in NRS E-136 plays like a 13' boat and works like a 14' boat. Its aggressive rocker and wide stance make it fun but dependable in the rapids. Great for fishing, overnights and just seeking thrills."
    );
    cy.contains("$195 per day");
    cy.get("img")
      .last()
      .should("have.attr", "src")
      .should("include", "/static/media/rigs-NRS-4.0977c83642013e888171.png");
  });

  it("should have a button allowing the user to rent the boat and guiding the user to the You Rentals view", () => {
    cy.get(".rigCard").first().click();
    cy.get("button").last().click();
    cy.url().should("include", "/your-rentals");
    cy.get(".rigCard")
      .should("have.length", 2)
      .first()
      .should(
        "have.text",
        "NRS Expedition-136 - fully riggedNRS | Multi-day$195 per day"
      );
  });

  it("should have a button allowing the user to return the boat and guiding the user to the You Rentals view", () => {
    cy.visit("https://river-renters.herokuapp.com/your-rentals");
    cy.get(".rigCard").first().click();
    cy.get("button").last().click();
    cy.url().should("include", "/your-rentals");
    cy.get(".rigCard").should("have.length", 0);
  });
});
