async function calcular() {
  const res = await fetch("/api/distance", {
    method: "POST",
    body: JSON.stringify({
      origem: "Centro, Campo Grande MS",
      destino: "Aeroporto Campo Grande MS"
    })
  });

  const data = await res.json();

  let valor = data.km * 2.2;

  if (valor < 15) valor = 15;

  alert("Valor da corrida: R$ " + valor.toFixed(2));
}

window.calcular = calcular;
