import React, { useState } from "react";

type TextProps = {
  text: string;
  limit: number;
  comeBack : string;
};

export default function MoreLess({ text, limit, comeBack }: TextProps) {
  const [mostrarMas, setMostrarMas] = useState(false);

  // Truncar el texto si supera el límite
  const textoCorto = text.slice(0, limit);

  const toggleMostrar = () => setMostrarMas(!mostrarMas);

  return (
    <p>
      {mostrarMas ? text : textoCorto + (text.length > limit ? "..." : "")}
      {text.length > limit && (
        <span
          onClick={toggleMostrar}
          
        >
          <a href={comeBack} style={{ color: "rgba(77, 77, 77, 1)", cursor: "pointer", marginLeft: "5px", }}>{mostrarMas ? "Mostrar menos" : "Mostrar más"}</a>
        </span>
      )}
    </p>
  );
}