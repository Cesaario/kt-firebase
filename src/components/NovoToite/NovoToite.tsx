import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { NomeUsuarioContext } from "../../App";
import { db } from "../../shared/firebase/firebase";
import "./NovoToite.css";

const LIMITE_CARACTERES = 140;

const NovoToite = () => {
  const nomeUsuario = useContext(NomeUsuarioContext);
  const [textoToite, setTextoToite] = useState("");

  const enviarToite = async () => {
    const objetoToite = {
      mensagem: textoToite,
      autor: nomeUsuario,
      timestamp: Timestamp.now(),
    };
    await addDoc(collection(db, "toites"), objetoToite);
    setTextoToite("");
  };

  return (
    <div className="novoToite">
      <textarea
        value={textoToite}
        maxLength={LIMITE_CARACTERES}
        onChange={(event) => setTextoToite(event.target.value)}
      />
      <span>{`${textoToite.length}/${LIMITE_CARACTERES}`}</span>
      <button disabled={!textoToite} onClick={enviarToite}>
        Enviar
      </button>
    </div>
  );
};

export default NovoToite;
