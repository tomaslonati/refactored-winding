import React, { useState, useEffect } from "react";
import SectionHeader from "../common/sectionHeader";
import ScrollToTop from "../common/ScrollToTop";

// Definición de los aparatos (puedes mover esto a un archivo aparte si prefieres)
const APARATOS = [
  { id: "obj0", nombre: "Heladera con freezer", icono: "heladera.png", consumo: 2000, potencia: 200, inicial: 0 },
  { id: "obj1", nombre: "Heladera sin freezer", icono: "heladera-sin.png", consumo: 1500, potencia: 150, inicial: 0 },
  { id: "obj2", nombre: "Freezer", icono: "freezer.png", consumo: 2000, potencia: 200, inicial: 0 },
  { id: "obj3", nombre: "Microondas", icono: "microonda.png", consumo: 800, potencia: 800, inicial: 0 },
  { id: "obj4", nombre: "Termotanque eléctrico", icono: "termo.png", consumo: 750, potencia: 1500, inicial: 0 },
  { id: "obj5", nombre: "Aire acondicionado", icono: "aire.png", consumo: 4000, potencia: 1000, inicial: 0 },
  { id: "obj6", nombre: "Pava eléctrica", icono: "pava.png", consumo: 150, potencia: 1500, inicial: 0 },
  { id: "obj7", nombre: "Televisión", icono: "tv.png", consumo: 800, potencia: 200, inicial: 0 },
  { id: "obj8", nombre: "Direct tv", icono: "direct-tv.png", consumo: 800, potencia: 100, inicial: 0 },
  { id: "obj9", nombre: "Computadora de escritorio", icono: "pc.png", consumo: 600, potencia: 150, inicial: 0 },
  { id: "obj10", nombre: "Notebook", icono: "notebook.png", consumo: 600, potencia: 150, inicial: 0 },
  { id: "obj11", nombre: "Lavarropas", icono: "lavarropas.png", consumo: 500, potencia: 1000, inicial: 0 },
  { id: "obj12", nombre: "Secarropas", icono: "secarropas.png", consumo: 250, potencia: 500, inicial: 0 },
  { id: "obj13", nombre: "Luces (m2 por vivienda)", icono: "luz.png", consumo: 4, potencia: 1, inicial: 30 },
  { id: "obj14", nombre: "Bombas monofásicas 1/2 HP", icono: "bomba.png", consumo: 373, potencia: 373, inicial: 0 },
  { id: "obj15", nombre: "Bombas monofásicas 1 HP", icono: "bomba.png", consumo: 746, potencia: 746, inicial: 0 },
];

// Provincias y lógica de cálculo (completo igual que el JS legacy)
const PROVINCIAS = {
  buenosAires: [ { hsp: 6.5, generacion: 3 }, { hsp: 2.49, generacion: 3 } ],
  caba: [ { hsp: 6.5, generacion: 2 }, { hsp: 2.5, generacion: 2 } ],
  catamarca: [ { hsp: 6, generacion: 2 }, { hsp: 2.88, generacion: 2 } ],
  cordoba: [ { hsp: 6.5, generacion: 4 }, { hsp: 3.08, generacion: 4 } ],
  corrientes: [ { hsp: 6.5, generacion: 3 }, { hsp: 3.575, generacion: 3 } ],
  chaco: [ { hsp: 6.5, generacion: 1 }, { hsp: 3.475, generacion: 1 } ],
  chubut: [ { hsp: 7.07, generacion: 5.27 }, { hsp: 2.17, generacion: 5.27 } ],
  entreRios: [ { hsp: 6.5, generacion: 1 }, { hsp: 3.2, generacion: 1 } ],
  formosa: [ { hsp: 6, generacion: 1 }, { hsp: 3.575, generacion: 1 } ],
  jujuy: [ { hsp: 6.5, generacion: 1 }, { hsp: 3.4, generacion: 1 } ],
  laPampa: [ { hsp: 6.5, generacion: 4 }, { hsp: 2.625, generacion: 4 } ],
  laRioja: [ { hsp: 6, generacion: 1 }, { hsp: 3.675, generacion: 1 } ],
  mendoza: [ { hsp: 7.5, generacion: 2 }, { hsp: 2.445, generacion: 2 } ],
  misiones: [ { hsp: 6.5, generacion: 1 }, { hsp: 3.525, generacion: 1 } ],
  neuquen: [ { hsp: 7, generacion: 2.74 }, { hsp: 2.805, generacion: 2.74 } ],
  rioNegro: [ { hsp: 7.07, generacion: 4.46 }, { hsp: 2, generacion: 4.46 } ],
  salta: [ { hsp: 6, generacion: 1 }, { hsp: 3.375, generacion: 1 } ],
  sanJuan: [ { hsp: 7, generacion: 4 }, { hsp: 4.075, generacion: 4 } ],
  sanLuis: [ { hsp: 6, generacion: 2 }, { hsp: 4.175, generacion: 2 } ],
  santaCruz: [ { hsp: 6.12, generacion: 4.24 }, { hsp: 1.635, generacion: 4.24 } ],
  santaFe: [ { hsp: 6.5, generacion: 1.5 }, { hsp: 3.08, generacion: 1.5 } ],
  santiago: [ { hsp: 6, generacion: 1 }, { hsp: 2.84, generacion: 1 } ],
  tucuman: [ { hsp: 6, generacion: 2 }, { hsp: 3.4, generacion: 2 } ],
  tierraDelFuego: [ { hsp: 5.665, generacion: 4.5 }, { hsp: 1.96, generacion: 4.5 } ],
};

// Nombres legibles para provincias
const PROV_LABELS = {
  buenosAires: "Buenos Aires",
  caba: "CABA",
  catamarca: "Catamarca",
  cordoba: "Córdoba",
  corrientes: "Corrientes",
  chaco: "Chaco",
  chubut: "Chubut",
  entreRios: "Entre Ríos",
  formosa: "Formosa",
  jujuy: "Jujuy",
  laPampa: "La Pampa",
  laRioja: "La Rioja",
  mendoza: "Mendoza",
  misiones: "Misiones",
  neuquen: "Neuquén",
  rioNegro: "Río Negro",
  salta: "Salta",
  sanJuan: "San Juan",
  sanLuis: "San Luis",
  santaCruz: "Santa Cruz",
  santaFe: "Santa Fe",
  santiago: "Santiago del Estero",
  tucuman: "Tucumán",
  tierraDelFuego: "Tierra del Fuego",
};

function calcularPaneles(hsp, generacion, consumo) {
  // Lógica simplificada, igual que en el JS legacy
  const a370 = 370 * hsp;
  const eolico = generacion * 1000000 / 365 * 0.5;
  return [consumo / a370, (consumo - eolico) / a370];
}

const initialForm = {
  province: "",
  use: "A",
  name: "",
  email: "",
  type: "A",
};

const CalculadorDeConsumo = () => {  // Estado de los aparatos
  const [contadores, setContadores] = useState(() => {
    // Restaurar cada contador individual si existe, si no usar array legacy, si no usar inicial
    let arr = APARATOS.map((a, i) => {
      const val = localStorage.getItem(`contador-${a.id}`);
      if (val !== null) return Number(val);
      return a.inicial;
    });
    return arr;
  });
  
  // Estado para otros aparatos personalizados
  const [otrosAparatos, setOtrosAparatos] = useState(() => {
    const saved = localStorage.getItem("otrosAparatos");
    return saved ? JSON.parse(saved) : [];
  });
  
  // Estado del formulario
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("form");
    return saved ? JSON.parse(saved) : initialForm;
  });
  // Estado de resultados
  const [result, setResult] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  // Persistencia en localStorage
  useEffect(() => {
    contadores.forEach((c, i) => localStorage.setItem(`contador-${APARATOS[i].id}`, c));
    localStorage.setItem("contadores", JSON.stringify(contadores));
  }, [contadores]);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);
  useEffect(() => {
    localStorage.setItem("otrosAparatos", JSON.stringify(otrosAparatos));
  }, [otrosAparatos]);

  // Restaurar scroll al cargar
  useEffect(() => {
    const scroll = localStorage.getItem("scrollPosition");
    if (scroll) window.scrollTo(0, parseInt(scroll, 10));
  }, []);

  // Hacer scroll arriba al montar el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Handlers de aparatos
  const inc = idx => {
    setContadores(cs => cs.map((c, i) => i === idx ? (APARATOS[idx].id === "obj13" ? c + 10 : c + 1) : c));
    localStorage.setItem("scrollPosition", window.scrollY);
  };
  const dec = idx => {
    setContadores(cs => cs.map((c, i) => i === idx ? Math.max(0, APARATOS[idx].id === "obj13" ? c - 10 : c - 1) : c));
    localStorage.setItem("scrollPosition", window.scrollY);
  };

  // Handlers para otros aparatos
  const agregarOtroAparato = () => {
    setOtrosAparatos(prev => [...prev, { id: Date.now(), nombre: "", watts: "", horas: "" }]);
  };
  
  const actualizarOtroAparato = (id, field, value) => {
    setOtrosAparatos(prev => 
      prev.map(aparato => 
        aparato.id === id ? { ...aparato, [field]: value } : aparato
      )
    );
  };
  
  const eliminarOtroAparato = (id) => {
    setOtrosAparatos(prev => prev.filter(aparato => aparato.id !== id));
  };

  // UX: cerrar popover con Escape y enfocar
  useEffect(() => {
    if (!showPopover) return;
    const handler = e => {
      if (e.key === "Escape") setShowPopover(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showPopover]);

  // Handlers de formulario
  const handleForm = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  // Cálculos
  const calcularConsumoTotal = () => {
    let consumo = APARATOS.reduce((acc, a, i) => acc + contadores[i] * a.consumo, 0);
    // Sumar el consumo de otros aparatos
    const consumoOtros = otrosAparatos.reduce((acc, otro) => {
      const watts = parseFloat(otro.watts) || 0;
      const horas = parseFloat(otro.horas) || 0;
      return acc + (watts * horas);
    }, 0);
    return (consumo + consumoOtros) / 0.9;
  };
  const calcularPotenciaTotal = () => {
    let potencia = APARATOS.reduce((acc, a, i) => acc + contadores[i] * a.potencia, 0);
    // Sumar la potencia de otros aparatos
    const potenciaOtros = otrosAparatos.reduce((acc, otro) => {
      return acc + (parseFloat(otro.watts) || 0);
    }, 0);
    return potencia + potenciaOtros;
  };
  const generarStringAparatos = () => {
    const aparatosPredefinidos = APARATOS.map((a, i) => contadores[i] > 0 ? `${a.nombre} x${contadores[i]}` : null).filter(Boolean);
    const aparatosPersonalizados = otrosAparatos
      .filter(otro => otro.nombre && otro.watts && otro.horas)
      .map(otro => `${otro.nombre} (${otro.watts}W, ${otro.horas}h/día)`);
    return [...aparatosPredefinidos, ...aparatosPersonalizados].join(", ");
  };

  // Calcular y mostrar resultados
  const calcular = e => {
    e.preventDefault();
    if (!form.province || !form.use || !form.name || !form.email || !form.type) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }
    const provincia = PROVINCIAS[form.province];
    if (!provincia) {
      alert("Provincia no reconocida");
      return;
    }
    const temporadaIdx = form.use === "A" ? 0 : 1;
    const { hsp, generacion } = provincia[temporadaIdx];
    const consumoTotal = calcularConsumoTotal();
    const paneles = calcularPaneles(hsp, generacion, consumoTotal);
    const potencia = calcularPotenciaTotal();
    setResult({
      consumoTotal: consumoTotal.toFixed(2),
      paneles: form.type === "A" ? Math.ceil(paneles[0]) : Math.max(0, Math.ceil(paneles[1])),
      potencia,
      temporada: form.use === "A" ? "de septiembre a marzo" : "durante todo el año",
      combo: form.type === "A" ? "Combo solar" : "Combo solar + 1 eólico Winding",
      aparatos: generarStringAparatos(),
    });
    setShowPopover(true);
  };

  // Mensaje de WhatsApp
  const getWhatsappMsg = () => {
    if (!result) return "";
    return encodeURIComponent(
      `Hola, quisiera pedir un presupuesto. Mi nombre es ${form.name} y vivo en ${form.province}. Mi consumo es de ${result.consumoTotal} Wh/diarios. Uso: ${result.temporada}. Me interesa el ${result.combo} y necesitaría ${result.paneles} paneles solares. Además, necesitaría un inversor de ${result.potencia} W. Muchas gracias. Aparatos: ${result.aparatos}`
    );
  };

  return (
    <>
      <ScrollToTop />
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-10  mb-10 ">
          <SectionHeader
              title="Calculador de Consumo"
              description="Calculá tu consumo eléctrico ingresando los datos requeridos y obtené un presupuesto personalizado."
              
          />
        <form onSubmit={calcular} autoComplete="off">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {APARATOS.map((a, i) => (
              <div key={a.id} className="flex flex-col items-center bg-blue-50 rounded-xl shadow p-3 w-32 min-h-[150px]">
                <img src={`public/assets/calculador/${a.icono}`} alt={a.nombre} className="w-12 h-12 object-contain mb-1" />
                <span className="text-xs text-center text-blue-900 min-h-[2.2em]">{a.nombre}</span>
                <div className="flex items-center gap-2 mt-2">
                  <button type="button" onClick={() => dec(i)} className="bg-blue-600 hover:bg-blue-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg">-</button>
                  <span className="text-base font-semibold w-6 text-center text-black">{contadores[i]}</span>
                  <button type="button" onClick={() => inc(i)} className="bg-blue-600 hover:bg-blue-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg">+</button>
                </div>
              </div>
            ))}          </div>
          
          {/* Sección de otros aparatos */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-blue-900">Otros aparatos</h4>
              <button 
                type="button"
                onClick={agregarOtroAparato}
                className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                + Agregar aparato
              </button>
            </div>
            
            {otrosAparatos.length === 0 ? (
              <p className="text-gray-500 text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
                No hay aparatos personalizados agregados. Haz clic en "Agregar aparato" para añadir uno.
              </p>
            ) : (
              <div className="space-y-3">
                {otrosAparatos.map((aparato) => (
                  <div key={aparato.id} className="flex flex-col md:flex-row gap-3 p-4 bg-gray-50 rounded-lg border">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-blue-900 mb-1">
                        Nombre del aparato:
                      </label>                      <input
                        type="text"
                        value={aparato.nombre}
                        onChange={(e) => actualizarOtroAparato(aparato.id, 'nombre', e.target.value)}
                        placeholder="Ej: Estufa eléctrica"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-blue-900 mb-1">
                        Consumo (Watts):
                      </label>                      <input
                        type="number"
                        min="0"
                        value={aparato.watts}
                        onChange={(e) => actualizarOtroAparato(aparato.id, 'watts', e.target.value)}
                        placeholder="1500"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-blue-900 mb-1">
                        Horas/día:
                      </label>                      <input
                        type="number"
                        min="0"
                        max="24"
                        step="0.5"
                        value={aparato.horas}
                        onChange={(e) => actualizarOtroAparato(aparato.id, 'horas', e.target.value)}
                        placeholder="8"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={() => eliminarOtroAparato(aparato.id)}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <label className="flex flex-col text-blue-900 text-sm font-medium min-w-[160px] w-full sm:w-auto">
              Provincia:
              <select name="province" value={form.province} onChange={handleForm} required className="mt-1 rounded-lg border border-gray-300 px-3 py-2 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" >
                <option value="">Seleccionar</option>
                {Object.keys(PROVINCIAS).map(p => <option key={p} value={p}>{PROV_LABELS[p] || p}</option>)}
              </select>
            </label>
            <label className="flex flex-col text-blue-900 text-sm font-medium min-w-[160px] w-full sm:w-auto">
              Temporada:
              <select name="use" value={form.use} onChange={handleForm} required className="mt-1 rounded-lg border border-gray-300 px-3 py-2 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full">
                <option value="A">de septiembre a marzo</option>
                <option value="B">todo el año</option>
              </select>
            </label>
            <label className="flex flex-col text-blue-900 text-sm font-medium min-w-[160px] w-full sm:w-auto">
              Nombre:
              <input name="name" value={form.name} onChange={handleForm} required className="mt-1 rounded-lg border border-gray-300 px-3 py-2 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
            </label>
            <label className="flex flex-col text-blue-900 text-sm font-medium min-w-[160px] w-full sm:w-auto">
              Email:
              <input name="email" value={form.email} onChange={handleForm} required type="email" className="mt-1 rounded-lg border border-gray-300 px-3 py-2 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
            </label>
            <label className="flex flex-col text-blue-900 text-sm font-medium min-w-[160px] w-full sm:w-auto">
              Tipo:
              <select name="type" value={form.type} onChange={handleForm} required className="mt-1 rounded-lg border border-gray-300 px-3 py-2 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-full">
                <option value="A">Combo solar</option>
                <option value="B">Combo solar + 1 eólico Winding</option>
              </select>
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white rounded-xl py-3 text-lg font-semibold transition-colors">Calcular</button>
        </form>
        {showPopover && result && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fadeIn text-center text-blue-900">
              <button onClick={() => setShowPopover(false)} className="absolute top-3 right-4 text-2xl text-blue-900 hover:text-blue-600 font-bold">×</button>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Resultado</h3>
              <div className="flex flex-row items-center gap-2 mb-2">
                <span className="flex items-center gap-2 mb-1 flex-col">
                  <img src="public/assets/calculador/soporte.png" alt="Panel solar" className="w-24 h-24 inline-block" />
                  Paneles necesarios: <b className="text-gray-900">{result.paneles}</b>
                </span>
                <span className="flex items-center gap-2 mb-1 flex-col">
                  <img src="public/assets/calculador/varios.png" alt="Inversor" className="w-24 h-24 inline-block" />
                  Inversor necesario: <b className="text-gray-900">{result.potencia} W</b>
                </span>
                {result.combo.includes('eólico') && (
                  <span className="flex items-center gap-2 mb-1 flex-col">
                    <img src="public/assets/calculador/eule.png" alt="Aerogenerador" className="w-24 h-24 inline-block" />
                    Eólicos: <b className="text-gray-900">1 eólico winding</b>
                  </span>
                )}
              </div>
              <a href={`https://wa.me/5492966312854?text=${getWhatsappMsg()}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-2 font-semibold mt-2 transition-colors">Pedir cotización</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalculadorDeConsumo;
