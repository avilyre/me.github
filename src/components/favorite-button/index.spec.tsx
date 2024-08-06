import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { FavoriteButton } from ".";

describe("Favorite Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render on the screen", async () => {
    const screen = render(<FavoriteButton isFavorited={false} />);
    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should be able to render with FALSE state", async () => {
    const screen = render(<FavoriteButton isFavorited={false} />);
    const button = await screen.findByRole("button", {
      name: "Favoritar",
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Favoritar");
    expect(button).toHaveClass("text-placeholder border-matte bg-matte");
  });

  it("should be able to render with TRUE state", async () => {
    const screen = render(<FavoriteButton isFavorited={true} />);
    const button = await screen.findByRole("button", {
      name: "Desfavoritar",
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Desfavoritar");
    expect(button).toHaveClass(
      "text-primary border border-primary bg-transparent",
    );
  });

  it("should be able to click on the button", async () => {
    const spy = vi.fn();

    const screen = render(<FavoriteButton onClick={spy} isFavorited={false} />);
    const button = await screen.findByRole("button");

    await userEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });
});
