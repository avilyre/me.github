import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import Page from "./page";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("should be able to render the home page", async () => {
    const title = await screen.findByRole("heading", {
      level: 1,
      name: "me.github",
    });

    expect(title).toBeInTheDocument();
  });
});
