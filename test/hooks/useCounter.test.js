const { renderHook, screen, act } = require("@testing-library/react");
const { UseCounter } = require("../../src/Hooks/useCounter");

describe("Pruebas UseCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => UseCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => UseCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe de Incrementar", () => {
    const { result } = renderHook(() => UseCounter(100));
    const { counter, increment } = result.current; // counter no se pasa por referencia
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(102);
  });

  test("debe decrementar", () => {
    const { result } = renderHook(() => UseCounter(100));
    const { counter, decrement } = result.current; // counter no se pasa por referencia
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(98);
  });

  test("debe resetear", () => {
    const { result } = renderHook(() => UseCounter(100));
    const { counter, reset, increment } = result.current; // counter no se pasa por referencia
    act(() => {
      increment(2);
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
