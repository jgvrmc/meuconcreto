import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    volume: "",
    agua: "",
    brita: "",
    cimento: "",
    areia: "",
    massaBrita: "",
    massaCimento: "",
    massaAreia: "",
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calcular = () => {
    const h = parseFloat(formData.volume);
    const a = parseFloat(formData.agua);
    const b = parseFloat(formData.brita);
    const c = parseFloat(formData.cimento);
    const r = parseFloat(formData.areia);

    const bb = parseFloat(formData.massaBrita);
    const cc = parseFloat(formData.massaCimento);
    const rr = parseFloat(formData.massaAreia);

    const aa1 = a / 1;
    const bb1 = b / bb;
    const cc1 = c / cc;
    const rr1 = r / rr;

    const soma = aa1 + bb1 + cc1 + rr1;
    const consumoc = 1000 / soma;
    const consumocc = consumoc * h;
    const consumoa = consumocc * a;
    const consumob = consumocc * b;
    const consumoar = consumocc * r;

    setResultado({
      cimento: consumocc,
      agua: consumoa,
      brita: consumob,
      areia: consumoar,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Meu Concreto</h1>
      <p className="text-sm text-red-600 mb-4">
        Este site está em fase de testes. Não utilizá-lo como base definitiva.
      </p>
      <p className="mb-6 text-gray-700">
        Criado por João Gabriel Velloso Rodrigues, estudante de Engenharia Civil da UFBA.
      </p>

      <div className="grid grid-cols-1 gap-4">
        <input
          name="volume"
          type="number"
          step="any"
          placeholder="Quantidade em m³"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="agua"
          type="number"
          step="any"
          placeholder="Água (partes)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="brita"
          type="number"
          step="any"
          placeholder="Brita (partes)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="cimento"
          type="number"
          step="any"
          placeholder="Cimento (partes)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="areia"
          type="number"
          step="any"
          placeholder="Areia (partes)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="massaBrita"
          type="number"
          step="any"
          placeholder="Massa específica da brita (g/cm³)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="massaCimento"
          type="number"
          step="any"
          placeholder="Massa específica do cimento (g/cm³)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="massaAreia"
          type="number"
          step="any"
          placeholder="Massa específica da areia (g/cm³)"
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={calcular}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calcular Consumo
      </button>

      {resultado && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            Resultado para {formData.volume} m³:
          </h2>
          <p>Cimento: {resultado.cimento.toFixed(2)} kg</p>
          <p>Água: {resultado.agua.toFixed(2)} kg</p>
          <p>Brita: {resultado.brita.toFixed(2)} kg</p>
          <p>Areia: {resultado.areia.toFixed(2)} kg</p>
        </div>
      )}
    </div>
  );
}