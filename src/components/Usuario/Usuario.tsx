import { useContext } from "react";
import { NomeUsuarioContext } from "../../App";
import "./Usuario.css";

const Usuario = () => {
  const nome = useContext(NomeUsuarioContext);

  return (
    <div className="usuario">
      <img
        src={`https://avatars.dicebear.com/api/identicon/${nome}.svg`}
        height="40px"
        alt="avatar"
      />
      <span>{nome}</span>
    </div>
  );
};

export default Usuario;
