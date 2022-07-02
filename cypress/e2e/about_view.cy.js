describe("River Renters about page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      fixture: "./raftData.json",
    }).visit("https://river-renters.herokuapp.com/");
  });

  it("should be able to navigate to the about page from the navigation bar", () => {
    cy.get(".btn").last().click();
    cy.url().should("include", "/about");
  });

  it("should be able to navigate to the about page with a url and contains all info", () => {
    cy.visit("https://river-renters.herokuapp.com/about");
    cy.contains("WE HELP YOU GET OUT THERE.");
    cy.contains(
      "The world of white water rafting is difficult to get into. Gear is expensive, going with a company on a guided trip is expensive, and permits for a river trip take a tremendous amount of luck. You either need to know someone or have time/money. River Renters seeks to solve some these problems by providing folks a way to rent fully rigged (or partially rigged) rafts - helping to lower the barrier of entry so more people can enjoy the sport of rafting."
    );
    cy.contains(
      "We help you get out there and experience the world. Our rafts start with the demands of the river culture, and we use some of the latest and best gear currently on the market. So rent a raft from us and get out there!"
    );
    cy.get(".aboutImage")
      .last()
      .should("have.attr", "src")
      .should("include", "/static/media/Rafting-5.7f30bd632313174a945b.png");
    cy.get(".riverRentersLogoTwo")
      .last()
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/RiverRenters-logo2.07e349f99ea70bad1e73.png"
      );
    cy.get(".boatIcon")
      .last()
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/RiverRenters-boat.7c90b5c4b0a6efcde8cc.png"
      );
  });
});
