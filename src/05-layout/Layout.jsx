import React from "react";

import { UseFetch } from "../Hooks/useFetch";
import { Loading } from "../03-example/Loading";
import { Quote } from "../03-example/Quote";

export const Layout = () => {
  const { data, isLoading, hasError, nexQuote } = UseFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes",
  );
  console.log(data, isLoading, hasError);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <div>BreakingBad Quotes</div>

      <hr />
      {isLoading ? <Loading /> : <Quote quote={quote} author={author} />}
      <button className="btn btn-primary" onClick={nexQuote}>
        next Quote
      </button>
    </>
  );
};
