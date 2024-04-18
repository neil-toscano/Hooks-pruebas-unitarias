import React, { useEffect, useState } from "react";

export const Firebase = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Leer datos desde la base de datos
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://projectocarrera-default-rtdb.firebaseio.com/.json",
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
      <div>Firebase</div>
    </>
  );
};
