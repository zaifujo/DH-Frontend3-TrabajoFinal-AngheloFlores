import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Contact from "../../../pages/contact/Contact";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Test <Contact />", () => {
  test("Renderizar formulario correctamente", () => {
    // Arrange
		render(<Contact />, {wrapper: BrowserRouter});

		const inputName = screen.getByRole("name");
		const inputEmail = screen.getByTestId("email");
    const textareaMessage = screen.getByRole("message");
    const buttonSubmit = screen.getByRole("button");

    // Assert
    expect(inputName).toBeDefined();
    expect(inputEmail.getAttribute("type")).toBe("email");
		expect(textareaMessage).toBeDefined();
    expect(buttonSubmit).toBeDefined();
	});

	test("Escribir en campos", async() => {
    // Arrange
    render(<Contact />, {wrapper: BrowserRouter});

    const user = userEvent.setup();
    const inputName = screen.getByRole("name");
    const inputEmail = screen.getByTestId("email");
    const textareaMessage = screen.getByRole("message");
    const buttonSubmit = screen.getByRole("button");

    // Act
    await user.type(inputName, "Anghelo Flores");    
    await user.type(inputEmail, "correodeanghelo@gmail.com");    
    await user.type(textareaMessage, "Genial");
    user.click(buttonSubmit);

    // Assert
    expect(inputName.value).toBe("Anghelo Flores");
    expect(inputEmail.value).toBe("correodeanghelo@gmail.com");
    expect(textareaMessage.value).toBe("Genial");
	});
});
