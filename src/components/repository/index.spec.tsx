import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Repository } from ".";

const repositoryProperties = {
  name: "Repository name",
  description: "Repository description",
  languages: ["TypeScript", "JavaScript", "CSS", "HTML"],
  updatedAt: new Date("2024-08-06:12:00:00"),
  isFavorited: true,
};

describe("Repository", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render on the screen", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const repository = await screen.findByRole("article");
    expect(repository).toBeInTheDocument();
  });

  it("should be able to render with a name", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const name = await screen.findByRole("heading", {
      level: 2,
      name: "Repository name",
    });
    expect(name).toBeInTheDocument();
  });

  it("should be able to render with a description", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const description = await screen.findByText("Repository description");
    expect(description).toBeInTheDocument();
  });

  it("should be able to render with languages", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const languages = await screen.findAllByTestId("language");
    expect(languages).toHaveLength(4);
  });

  it("should be able to render with an updated date", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const updatedAt = await screen.findByText(
      "Atualizado em 6 de ago. de 2024",
    );
    expect(updatedAt).toBeInTheDocument();
  });

  it("should be able to render with a favorite button", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const favoriteButton = await screen.findByTestId("favorite-button");
    expect(favoriteButton).toBeInTheDocument();
  });

  it("should be able to render with a favorite button with TRUE state", async () => {
    const screen = render(<Repository {...repositoryProperties} />);
    const favoriteButton = await screen.findByTestId("favorite-button");

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveAttribute("aria-label", "Desfavoritar");
  });

  it("should be able to render without languages", () => {
    const repositoryPropertiesWithoutLanguages = {
      ...repositoryProperties,
      languages: [],
    };
    const screen = render(
      <Repository {...repositoryPropertiesWithoutLanguages} />,
    );
    const languages = screen.queryAllByTestId("language");
    expect(languages).toHaveLength(0);
  });
});
