import { useState } from 'react';

export default function SimpleForm() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();
    let suma = Number(num1) + Number(num2);
    alert(`Resultado , ${suma}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa un numero"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

    <input
        type="text"
        placeholder="ingresa otro numero"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}