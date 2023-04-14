import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../shared/firebase/firebase";
import IToite from "../../shared/types/IToite";
import "./Toite.css";

interface ToiteProps {
  toite: IToite;
}

const Toite = (props: ToiteProps) => {
  const { toite } = props;

  const horaFormatada = toite.timestamp.toDate().toLocaleTimeString();

  const deletarToite = () => {
    deleteDoc(doc(db, "toites", toite.id));
  };

  return (
    <div className="toite">
      <div className="autorToite">
        <img
          src={`https://avatars.dicebear.com/api/identicon/${toite.autor}.svg`}
          height="20px"
          alt="avatar"
        />
        <span>{`${toite.autor} - ${horaFormatada}`}</span>
      </div>
      <p>{toite.mensagem}</p>
      <button onClick={deletarToite}>X</button>
    </div>
  );
};

export default Toite;
