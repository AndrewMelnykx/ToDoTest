import React from "react";
import Header from "@components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render an image with alt text 'MountainPicture'", () => {
    render(<Header />);
    const img = screen.getByAltText("MountainPicture");
    expect(img).toBeInTheDocument();
  });
});
