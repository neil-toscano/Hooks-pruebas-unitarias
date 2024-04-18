import React from "react";
import { UseFetch } from "../Hooks/useFetch";
import { Loading } from "./Loading";
import { Quote } from "./Quote";

export const Multiplecustomhooks = () => {
  const { data, isLoading, hasError, nexQuote } = UseFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes",
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <div>BreakingBad Quotes</div>

      <hr />
      {isLoading ? <Loading /> : <Quote quote={quote} author={author} />}
      <button
        className="btn btn-primary"
        onClick={nexQuote}
        disabled={isLoading}
      >
        next Quote
      </button>
    </>
  );
};
