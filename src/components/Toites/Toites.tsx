import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../shared/firebase/firebase";
import IToite from "../../shared/types/IToite";
import Toite from "../Toite/Toite";
import "./Toites.css";

const Toites = () => {
  const [toites, setToites] = useState<IToite[]>([]);

  useEffect(() => {
    const queryToites = query(
      collection(db, "toites"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(queryToites, (colecao) => {
      const colecaoTratada = colecao.docs.map((documento) => {
        const dadosToite = documento.data();
        const toite: IToite = {
          id: documento.id,
          autor: dadosToite.autor,
          mensagem: dadosToite.mensagem,
          timestamp: dadosToite.timestamp,
        };
        return toite;
      });
      setToites(colecaoTratada);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="toites">
      {toites.map((toite) => (
        <Toite key={toite.id} toite={toite} />
      ))}
    </div>
  );
};

export default Toites;
