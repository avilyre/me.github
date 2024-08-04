import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { Idle } from ".";

describe("Display Search Idle", () => {
  beforeAll(() => {
    render(<Idle />);
  });

  it("should be able to render on the screen", async () => {
    const idle = await screen.findByTestId("display-search-idle");
    expect(idle).toBeInTheDocument();
  });

  it("should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      level: 3,
      name: "Procure pelo Nome ou Nome de Usuário",
    });
    expect(title).toBeInTheDocument();
  });

  it("should be able to render the description", async () => {
    const description = await screen.findByText(
      "Encontre os repositórios de algum usuário digitando no campo acima",
    );
    expect(description).toBeInTheDocument();
  });

  it("shoud be able to render the image with the correct src and alt", async () => {
    const image = await screen.findByAltText("Search People");

    const srcImageName = /(?<=\S)search-people(?=\S)/;
    const hasTheRightImage = (image as HTMLImageElement).src.match(
      srcImageName,
    );
    expect(hasTheRightImage).toBeTruthy();
    expect(image).toBeInTheDocument();
  });
});
