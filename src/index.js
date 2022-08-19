import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import diagrama from "./assets/diagrama.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));
const transiciones = [
  [8, 7, 8, 5, 0, 2, 0, 9],
  [2, 1, 4, 5, 1, 1, 3, 9],
  [7, 7, 4, 5, 2, 7, 4, 3],
  [7, 7, 8, 5, 3, 7, 0, 9],
  [4, 7, 1, 5, 4, 7, 3, 3],
  [5, 5, 5, 2, 6, 5, 0, 9],
  [6, 6, 6, 6, 1, 6, 6, 9],
  [6, 7, 2, 5, 7, 7, 3, 3],
  [0, 8, 1, 5, 8, 3, 0, 3],
  [9, 9, 9, 9, 9, 9, 9, 9],
];

function PantallaInicial() {
  let borrar = "hidden"
  console.log("Hola")
  const V = [0, 1, 2, 3, 4, 5, 6, 7];
  const Qindex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Qvalues = [
    "Dormido",
    "Hambriento",
    "Tranquilo",
    "Triste",
    "Aburrido",
    "Enfermo",
    "Evacuando",
    "Feliz",
    "Cansado",
    "Muerto",
  ];
  const Qemojis = ["😴", "😛", "😃", "😪", "🙄", "😷", "🥴", "😄", "😔", "😵"];
  const [StateIndex, setStateIndex] = useState(2);
  const [StateValue, setStateValue] = useState(Qvalues[StateIndex]);
  const [StateEmoji, setStateEmoji] = useState(Qemojis[StateIndex]);

  const [Vida, setVida] = useState(1);
  const [Alimentación, setAlimentacion] = useState(1);
  const [Salud, setSalud] = useState(1);
  const [Entretenimiento, setEntretenimiento] = useState(1);
  const [Felicidad, setFelicidad] = useState(1);
  const [Energia, setEnergia] = useState(1);

  useEffect(() => {
    setStateValue(Qvalues[StateIndex])
    setStateEmoji(Qemojis[StateIndex])
    const timer = setTimeout(() => {
      // Reducir parámetros
      if (StateIndex !== 9) {
        setVida((Vida - 0.01).toFixed(3));
        setEnergia(Energia - 0.1);
        if (Felicidad >= 0.04) {
          setFelicidad((Felicidad - 0.08).toFixed(2));
        } else {setFelicidad(0);}
        if (Felicidad >= 0.04) {setEntretenimiento((Entretenimiento - 0.06).toFixed(2));
        } else {setEntretenimiento(0)}
        setSalud((Salud - 0.04).toFixed(2));
        setAlimentacion((Alimentación - 0.02).toFixed(2));

        //CAMBIOS DE ESTADO POR PARAMETROS
        
        if (Energia < 0.75) {
          setStateIndex(8);
          setStateValue(Qvalues[StateIndex]);
          setStateEmoji(Qemojis[StateIndex]);
        }
        if (Felicidad < 0.5) {
          setStateIndex(3);
          setStateValue(Qvalues[StateIndex]);
          setStateEmoji(Qemojis[StateIndex]);
        }
        if (Entretenimiento < 0.35) {
          setStateIndex(4);
          setStateValue(Qvalues[StateIndex]);
          setStateEmoji(Qemojis[StateIndex]);
        }
        if (Salud < 0.5) {
          setStateIndex(5);
          setStateValue(Qvalues[StateIndex]);
          setStateEmoji(Qemojis[StateIndex]);
        }
        if (Alimentación < 0.5) {
          setStateIndex(0);
          setStateValue(Qvalues[StateIndex]);
          setStateEmoji(Qemojis[StateIndex]);
        }
        
      }
      if (Vida < 0.100) {
        setStateIndex(9);
        setStateValue(Qvalues[StateIndex]);
        setStateEmoji(Qemojis[StateIndex]);
      }
      
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [
    StateIndex,
    StateEmoji,
    StateValue,
    Vida,
    Energia,
    Felicidad,
    Entretenimiento,
    Salud,
    Alimentación,
  ]);






  return (
    <div>
      <div class="container-fluid">
        <Title title="Tamagotchi" />

        <div class="row">
          <div class="col-sm-3 border ">
            <ul class="list-group list-group-flush w-100">
              <li class="list-group-item">
                Vida
                <div class="progress">
                  <div class="progress-bar" style={{ width: 400 * Vida }}>
                    {(Vida * 100).toFixed(0)}%
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                Alimentación
                <div class="progress">
                  <div
                    class="progress-bar"
                    style={{ width: 400 * Alimentación }}
                  >
                    {(100 * Alimentación).toFixed(0)}%
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                Salud
                <div class="progress">
                  <div class="progress-bar" style={{ width: 400 * Salud }}>
                    {(100 * Salud).toFixed(0)}%
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                Entretenimiento
                <div class="progress">
                  <div
                    class="progress-bar"
                    style={{ width: 400 * Entretenimiento }}
                  >
                    {(100 * Entretenimiento).toFixed(0)}%
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                Felicidad
                <div class="progress">
                  <div class="progress-bar" style={{ width: 400 * Felicidad }}>
                    {(100 * Felicidad).toFixed(0)}%
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                Energía
                <div class="progress">
                  <div class="progress-bar" style={{ width: 400 * Energia }}>
                    {(100 * Energia).toFixed(0)}%
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-sm-9 border">
            <div class="text-center m-5 border">
              <div style={{ fontSize: 300 }}>{StateEmoji}</div>
            </div>
            <div class="w-25 display-4 border mx-auto text-center p-3 mb-5">
              {StateValue}
            </div>
            <div class="d-flex justify-content-around m-5">
              <button style={{visibility: isVisible(StateIndex,0)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][0])
                  setVida(1)
                  setAlimentacion(1)
                  setEnergia(1)
                }}
              >
                🍔 Comer
              </button>
              <button style={{visibility: isVisible(StateIndex,1)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][1]);
                  setFelicidad(1);
                }}
              >
                😊 Mimar
              </button>
              <button style={{visibility: isVisible(StateIndex,2)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][2]);
                  setEntretenimiento(1);
                }}
              >
                📕 Leer
              </button>
              <button style={{visibility: isVisible(StateIndex,3)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][3]);

                  setSalud(1);
                  setVida(1);
                }}
              >
                🧪 Medicina
              </button>
              <button style={{visibility: isVisible(StateIndex,4)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][4]);
                  setSalud(1);
                }}
              >
                💩 Baño
              </button>
              <button style={{visibility: isVisible(StateIndex,5)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][5]);
                  setEntretenimiento(1);
                  setFelicidad(1);
                  setEnergia(1);
                }}
              >
                🎶 Música
              </button>
              <button style={{visibility: isVisible(StateIndex,6)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][6]);
                  setEnergia(1);
                  setVida(1);
                }}
              >
                😴 Dormir
              </button>
              <button style={{visibility: isVisible(StateIndex,7)}}
                onClick={() => {
                  setStateIndex(transiciones[StateIndex][7])
                  
                  setVida(() => {
                    return Vida - 0.1;
                  })
                  console.log(StateIndex)
                }}
              >
                👊 Golpear
              </button>
            </div>
          </div>
        </div>

        <TablaDeTransición />
      </div>
    </div>
  );
}

function Title({ title }) {
  return (
    <div class="row">
      <h1 class="display-1 text-sm-center">{title}</h1>
    </div>
  );
}
function TablaDeTransición() {
  return (
    <div class="row p-5">
      <img src={diagrama} class="img-fluid" alt="Tabla de transición" />
    </div>
  );
}
function isVisible(status, button){
return transiciones[status][button]==status? "hidden":"visible"
}
root.render(
  <>
    <PantallaInicial />
  </>
);
