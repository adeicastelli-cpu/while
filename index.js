let victoriasUsuario = 0;
let victoriasMaquina = 0;
let torneoCancelado = false;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {
  let jugada = prompt("Elige: Piedra, Papel o Tijera");

  if (jugada === null) {
    console.log("El torneo fue cancelado.");
    torneoCancelado = true;
    break;
  }

  jugada = jugada.toLowerCase().trim();

  if (!["piedra", "papel", "tijera"].includes(jugada)) {
    console.log("Jugada no válida. Intenta nuevamente.");
    continue;
  }

  const azar = Math.random();
  let jugadaMaquina;

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
    console.log("Empate.");
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    console.log(`Ganaste la ronda. Marcador: ${victoriasUsuario}-${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    console.log(`La máquina gana la ronda. Marcador: ${victoriasUsuario}-${victoriasMaquina}`);
  }
}
if (!torneoCancelado) {
  const campeon = victoriasUsuario > victoriasMaquina ? "el usuario" : "la máquina";
  console.log(`El campeón es ${campeon}. Resultado final: ${victoriasUsuario}-${victoriasMaquina}`);
}

