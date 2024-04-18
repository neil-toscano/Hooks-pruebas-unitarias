import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>LoginPayage</div>
        <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      </div>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "neil",
            email: "neil.toscano.f@gmail.com",
          })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
