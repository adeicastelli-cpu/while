let victoriasUsuario = 0;
let victoriasMaquina = 0;
let INPUTFALSE = false;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {
  let jugada = prompt("ELEGI: Piedra, Papel o Tijera");

  if (jugada === null) {
    alert("no valido! Intenta de nuevo.");
    INPUTFALSE = true;
    break;
  }

  jugada = jugada.toLowerCase().trim();

  if (!["piedra", "papel", "tijera"].includes(jugada)) {
    alert("Seguro escribiste algo mal. Intenta de nuevo.");
    continue;
  }

  const azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  alert(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
    alert("Empate.");
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    alert(`Ganaste!. Puntos: ${victoriasUsuario}-${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    alert(`Perdiste la ronda contra una maquina sos malisimo. Puntos: ${victoriasUsuario}-${victoriasMaquina}`);
  }
}
if (!INPUTFALSE) {
  const campeon = victoriasUsuario > victoriasMaquina ? "el usuario" : "la máquina";
  alert(` Y el ganador es... ${campeon}. Puntos: ${victoriasUsuario}-${victoriasMaquina}`);
}

