let saluto = (nome: string) => {
  return "ciao " + nome;
};

interface SalutoProps {
  nome: string;
  cognome?: string;
}

export default function Saluto({ nome }: SalutoProps) {
  return <p>Ciao {nome}</p>;
}

export const Salutos: React.FC<{ nome: string }> = ({ nome }) => {
  return <p>Ciao {nome}</p>;
};
