describe("River Renters rent a rig display", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://river-renters-api.herokuapp.com/api/v1/rigs", {
      fixture: "./raftData.json",
    }).visit("http://localhost:3000/");
  });

  it("should display the home page with the navigation and rent a rig display", () => {});
});
