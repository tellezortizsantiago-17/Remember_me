import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { checkHealth } from "../services/healthService";

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState("Verificando...");

  useEffect(() => {
    checkHealth()
      .then((res) => setApiStatus(`${res.status} (${res.service})`))
      .catch(() => setApiStatus("Sin conexión con la API"));
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <h1 className="text-xl font-semibold mb-2">Arquitectura Base Lista</h1>
          <p className="text-sm text-slate-600">
            Estructura frontend configurada para cuidadores en móvil y escritorio.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-sm font-medium text-slate-500">Estado Backend</h2>
          <p className="text-base font-semibold mt-1 text-emerald-700">{apiStatus}</p>
        </div>
      </div>
    </MainLayout>
  );
}