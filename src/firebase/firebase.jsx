import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  // Tu configuración de Firebase aquí
  // ...
  databaseURL: "https://projectocarrera-default-rtdb.firebaseio.com/",
};

export const Datas = () => {
  const [data, setData] = useState(null);
  const [entries, setEntries] = useState([]);

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  useEffect(() => {
    const starCountRef = ref(database, "sensores/temperatura");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEntries(Object.entries(data));
      console.log(entries);
      setData(data);
    });
    ////////////
    const WriteData = () => {
      const currentDate = new Date().toISOString();
      const newSensor = push(ref(database, "sensores/temperatura"));
      set(newSensor, {
        nombre: "Valor_temp",
        valor: 45,
        fecha: currentDate,
      });
    };
    WriteData();
  }, []);

  /*
import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

  */

  return (
    <>
      <div>
        {entries.map(([a, b]) => (
          <h1 key={a}>{JSON.stringify(b)}</h1>
        ))}
      </div>
    </>
  );
};
