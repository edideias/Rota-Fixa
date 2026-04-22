function navigate(page) {
  const app = document.getElementById("app");

  if (page === "home") {
    app.innerHTML = `
      <div class="card">
        <h2>Transporte confiável com rotas fixas</h2>
        <p>Agendamento fácil para trabalho, escola e aeroporto.</p>

        <button onclick="abrirWhatsAppAudio()">
          🎤 Enviar por áudio
        </button>
      </div>
    `;
  }

  if (page === "agendar") {
    app.innerHTML = `
      <div class="card">
        <h2>Agendar transporte</h2>
        <p>Preencha os dados do seu trajeto.</p>
      </div>
    `;
  }

  if (page === "planos") {
    app.innerHTML = `
      <div class="card">
        <h2>Planos disponíveis</h2>
        <p>Trabalho | Escolar | Idosos | Aeroporto | Avulso</p>
      </div>
    `;
  }

  if (page === "contato") {
    app.innerHTML = `
      <div class="card">
        <h2>Contato</h2>
        <p>Fale conosco pelo WhatsApp</p>
      </div>
    `;
  }
}

function abrirWhatsAppAudio() {
  const numero = "5567981434188"; // 🔴 coloque seu número

  const mensagem = encodeURIComponent(
`Olá! Quero fazer um pré-agendamento 🚗

Vou te enviar um áudio com:
- Local de saída
- Destino
- Horário
- Tipo (ida ou ida e volta)
- Período

Você terá sempre o mesmo motorista.`
  );

  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

navigate("home");
async function calcularRota() {
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;

  const apiKey = "SUA_API_KEY_AQUI";

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origem}&destinations=${destino}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const distancia = data.rows[0].elements[0].distance.value / 1000; // km
  const tempo = data.rows[0].elements[0].duration.text;

  // custo real (ajuste aqui)
  const valorPorKm = 2.5;

  const valor = (distancia * valorPorKm).toFixed(2);

  document.getElementById("resultado").innerText =
    `Distância: ${distancia.toFixed(2)} km | Tempo: ${tempo} | Valor: R$ ${valor}`;
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD52VZorzfJGWI6yq_LOeKd__P-GnPHsZY",
  authDomain: "rota-fixa.firebaseapp.com",
  projectId: "rota-fixa",
  storageBucket: "rota-fixa.firebasestorage.app",
  messagingSenderId: "865771687482",
  appId: "1:865771687482:web:2151fb1527395504a32f03",
  measurementId: "G-2S028P5BQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
