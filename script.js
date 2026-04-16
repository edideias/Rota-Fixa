function navigate(page) {
  const app = document.getElementById("app");

  if (page === "home") {
    app.innerHTML = `
      <div class="card">
        <h2>Atendimento Rota Fixa 🚗</h2>
        <p>Você terá sempre o mesmo motorista.</p>

        <button onclick="abrirWhatsAppAudio()">
          🎤 Enviar pedido por áudio
        </button>

        <p style="margin-top:10px;">
          Você será direcionado para o WhatsApp para gravar o áudio.
        </p>
      </div>
    `;
  }
}

navigate("home");

function abrirWhatsAppAudio() {
  const numero = "5567999999999"; // 🔴 coloque seu número

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

  const url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, "_blank");
}