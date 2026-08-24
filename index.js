let victoriasUsuario = 0;
let victoriasMaquina = 0;
let INPUTFALSE = false;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {
  let jugada = prompt("ElEGI: Piedra, Papel o Tijera");

  if (jugada === null) {
    alert("no valido! Intenta de nuevo.");
    INPUTFALSE = true;
    break;
  }

  jugada = jugada.toLowerCase().trim();

  if (!["piedra", "papel", "tijera"].includes(jugada)) {
    alert("Jugada no válida. Intenta nuevamente.");
    continue;
  }

  const opciones = ["piedra", "papel", "tijera"];
  const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];

  alert(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
    alert("Empate.");
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    alert(`Ganaste la ronda. Marcador: ${victoriasUsuario}-${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    alert(`La máquina gana la ronda. Marcador: ${victoriasUsuario}-${victoriasMaquina}`);
  }
}
if (!INPUTFALSE) {
  const campeon = victoriasUsuario > victoriasMaquina ? "el usuario" : "la máquina";
  alert(`El campeón es ${campeon}. Resultado final: ${victoriasUsuario}-${victoriasMaquina}`);
}

