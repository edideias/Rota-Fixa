function navigate(page) {
  const app = document.getElementById("app");

  if (page === "home") {
    app.innerHTML = `
      <div class="card">
        <h2>Transporte confiável com rotas fixas</h2>
        <p>Agendamento fácil para trabalho, escola e aeroporto.</p>
      </div>
    `;
  }

  if (page === "agendar") {
    app.innerHTML = `
      <div class="card">
        <h2>Agendar Corrida</h2>
        <input placeholder="Origem" /><br><br>
        <input placeholder="Destino" /><br><br>
        <button onclick="alert('Agendado!')">Confirmar</button>
      </div>
    `;
  }

  if (page === "planos") {
    app.innerHTML = `
      <div class="card">
        <h2>Planos</h2>
        <p>Plano Diário, Semanal e Mensal</p>
      </div>
    `;
  }

  if (page === "contato") {
    app.innerHTML = `
      <div class="card">
        <h2>Contato</h2>
        <p>WhatsApp: (xx) xxxxx-xxxx</p>
      </div>
    `;
  }
}

navigate("home");