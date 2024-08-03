import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { Navbar } from ".";

describe("Navbar", () => {
  beforeAll(() => {
    render(<Navbar />);
  });

  it("should be able to render on the screen", async () => {
    const navbar = await screen.findByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("should be able to render with a search input", async () => {
    const searchInput = await screen.findByPlaceholderText("Buscar usuário");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "search");
  });

  it("should be able to render with favorites link", async () => {
    const favoritesLink = await screen.findByRole("link", {
      name: "Favoritos",
    });
    expect(favoritesLink).toBeInTheDocument();
  });
});
