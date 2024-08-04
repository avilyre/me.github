import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { UserProfile } from ".";

const userFullProperties = {
  avatarURL: "https://github.com/avilyre.png",
  name: "Avily Silva",
  username: "avilyre",
  description: "Design Engineer",
};

describe("User Profile", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render on the screen", async () => {
    const screen = render(<UserProfile user={userFullProperties} />);
    const userProfile = await screen.findByTestId("user-profile");
    expect(userProfile).toBeInTheDocument();
  });

  it("should be able to render the avatar", async () => {
    const screen = render(<UserProfile user={userFullProperties} />);
    const image = await screen.findByRole("img", {
      name: "Avatar do usuário",
    });
    const srcImageName = /(?<=\S)avilyre(?=\S)/;
    const hasTheRightImage = (image as HTMLImageElement).src.match(
      srcImageName,
    );
    expect(image).toBeInTheDocument();
    expect(hasTheRightImage).toBeTruthy();
  });

  it("should be able to render the name", async () => {
    const screen = render(<UserProfile user={userFullProperties} />);
    const name = await screen.findByText("Avily Silva");
    expect(name).toBeInTheDocument();
  });

  it("should be able to render the username", async () => {
    const screen = render(<UserProfile user={userFullProperties} />);
    const username = await screen.findByText("@avilyre");
    expect(username).toBeInTheDocument();
  });

  it("should be able to render the description", async () => {
    const screen = render(<UserProfile user={userFullProperties} />);
    const description = await screen.findByText("Design Engineer");
    expect(description).toBeInTheDocument();
  });
});
