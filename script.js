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
}

navigate("home");

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

  const url = `https://wa.me/67981434188${numero}?text=${mensagem}`;

  window.open(url, "_blank");
}
function abrirWhatsAppAudio() {
  const numero = "5567981434188"; // seu número

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

  window.open(`https://wa.me/67981434188${numero}?text=${mensagem}`, "_blank");
}