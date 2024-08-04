import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { EmptyResult } from ".";

describe("Display Search Idle", () => {
  beforeAll(() => {
    render(<EmptyResult searchedText="megithub" />);
  });

  it("should be able to render on the screen", async () => {
    const idle = await screen.findByTestId("display-search-empty-result");
    expect(idle).toBeInTheDocument();
  });

  it("should be able to render the search result text", async () => {
    const searchedText = await screen.findByText('"megithub"');
    expect(searchedText).toBeInTheDocument();
  });

  it("should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      level: 3,
      name: "Nenhum usuário encontrado",
    });
    expect(title).toBeInTheDocument();
  });

  it("should be able to render the description", async () => {
    const description = await screen.findByText(
      "Verifique se a escrita está correta ou tente novamente",
    );
    expect(description).toBeInTheDocument();
  });

  it("shoud be able to render the image with the correct src and alt", async () => {
    const image = await screen.findByAltText("Search People");

    const srcImageName = /(?<=\S)abduction(?=\S)/;
    const hasTheRightImage = (image as HTMLImageElement).src.match(
      srcImageName,
    );
    expect(hasTheRightImage).toBeTruthy();
    expect(image).toBeInTheDocument();
  });
});
