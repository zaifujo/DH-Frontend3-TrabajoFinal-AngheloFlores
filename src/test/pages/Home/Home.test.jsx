import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "../../../pages/home/Home";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "../../../context/FavoritesContext";

afterEach(() => {
  cleanup();
});

describe("Test <Home />", () => {
  test("Renderizar home correctamente", () => {
    // Arrange
		render(<FavoritesProvider><Home /></FavoritesProvider>, {wrapper: BrowserRouter});

		const cardImg = screen.getByRole("img");

    // Assert
    expect(cardImg).toBeDefined();
	});
});
