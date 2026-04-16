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

      <div class="card">
        <h3>Agendar transporte</h3>
        <button onclick="navigate('agendar')">Agendar agora</button>
      </div>

      <div class="card">
        <h3>Planos disponíveis</h3>
        <button onclick="navigate('planos')">Ver planos</button>
      </div>
    `;
  }

  if (page === "agendar") {
    app.innerHTML = `
      <div class="card">
        <h2>Agendar Corrida</h2>
        <input placeholder="Origem"><br><br>
        <input placeholder="Destino"><br><br>
        <button>Confirmar</button>
      </div>
    `;
  }

  if (page === "planos") {
    app.innerHTML = `
      <div class="card">
        <h2>Planos</h2>
        <p>Trabalho | Escolar | Idosos | Aeroporto | Avulso</p>
      </div>
    `;
  }

  if (page === "contato") {
    app.innerHTML = `
      <div class="card">
        <h2>Contato</h2>
        <p>WhatsApp disponível</p>
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