import { fireEvent, render, screen } from "@testing-library/react";
import { Multiplecustomhooks } from "../../src/03-example/multiplecustomhooks";
import { UseFetch } from "../../src/Hooks/useFetch";

jest.mock("../../src/Hooks/useFetch");

describe("Pruebas en <multipleCustomHooks />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("debe de mostrar el componente por defecto", () => {
    UseFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<Multiplecustomhooks />);

    expect(screen.getByText("Loading"));
    expect(screen.getByText("BreakingBad Quotes"));
    const nextButton = screen.getByRole("button", { name: "next Quote" });
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test("debe de mostrar un Quote", () => {
    UseFetch.mockReturnValue({
      data: [{ author: "Neil", quote: "Hello world" }],
      isLoading: false,
      hasError: null,
    });
    render(<Multiplecustomhooks />);
    expect(screen.getByText("Hello world")).toBeTruthy();
    expect(screen.getByText("Neil")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "next Quote" });
    expect(nextButton.disabled).toBeFalsy();
    screen.debug();
  });

  test("debe de llamar la función de incrementar", () => {
    // const { nexQuote } = UseFetch();
    const mockNextQuote = jest.fn();
    UseFetch.mockReturnValue({
      data: [{ author: "Neil", quote: "Hello world" }],
      isLoading: false,
      hasError: null,
      nexQuote: mockNextQuote,
    });

    render(<Multiplecustomhooks />);
    const nextButton = screen.getByRole("button", { name: "next Quote" });
    fireEvent.click(nextButton);
    expect(mockNextQuote).toHaveBeenCalled();
    screen.debug();
  });
});
