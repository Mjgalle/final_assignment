import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Instructions from "../index.js";

const mockData = {
  instructionsTitle: "How to Play",
  instructionsDescription: "Match all the cards to win the game.",
};

describe("Instructions", () => {
  it("renders the title and description from data props", () => {
    render(
      <MemoryRouter>
        <Instructions data={mockData} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /how to play/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/match all the cards/i)).toBeInTheDocument();
  });

  it("renders a back button that links to home", () => {
    render(
      <MemoryRouter>
        <Instructions data={mockData} />
      </MemoryRouter>
    );

    const backButton = screen.getByRole("link", { name: /back/i });
    expect(backButton).toHaveAttribute("href", "/");
    expect(backButton).toBeInTheDocument();
  });
});
