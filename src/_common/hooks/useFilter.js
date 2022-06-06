import { useState, useEffect } from "react";

const normalizarString = (string) =>
  string
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const useFilter = ({ string, filtro }) => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    filter(string, filtro);
  }, [string, filtro]);

  const filter = (string, filtro) => {
    const str = normalizarString(filtro);

    if (!str.length) return string;
    if (normalizarString(string).includes(str)) setTexto(string);
    // if (normalizarString(string).includes(str)) return string;
    return null;
  };

  return texto;
};

export default useFilter;
