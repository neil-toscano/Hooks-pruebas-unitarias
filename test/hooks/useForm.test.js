import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/Hooks/useForm";

describe("Pruebas Form", () => {
  const initialForm = {
    name: "Neil",
    email: "neil.toscano.f@uni.pe",
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newdata = {
      value: "juan",
      name: "name",
    };
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: newdata });
    });

    expect(result.current.name).toEqual(newdata.value);
    expect(result.current.formState.name).toBe(newdata.value);
  });

  test("debe de realizar el reset del formulario", () => {
    const newdata = {
      value: "juan",
      name: "name",
    };
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: newdata });
    });
    expect(result.current.name).toEqual(newdata.value);

    act(() => {
      onResetForm();
    });
    expect(result.current.name).toEqual(initialForm.name);
  });
});
