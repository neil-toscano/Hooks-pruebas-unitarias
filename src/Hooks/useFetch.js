import React, { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const response = await fetch(url);
    const JsonData = await response.json();
    setState({
      data: JsonData,
      isLoading: false,
      hasError: null,
    });
    console.log(JsonData[0]);
  };
  const nexQuote = () => {
    console.log("hola");
    getFetch();
  };
  useEffect(() => {
    getFetch();
  }, []);
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    nexQuote,
  };
};
