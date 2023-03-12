function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
  let resultado="";
  if (jugada==1){
    resultado="Piedra ✊🏼";
  }else if(jugada==2){
    resultado="papel 📃";
  }else if (jugada==3) {
    resultado="tijera ✂";
  }else{
    alert("ingresa una de las 3 opciones");
  }
  return resultado;
}
//1 es pidras. 2 es papel y 3 es tijera
let jugador =0;
let pc= 0;
let triunfos=0;
let derrotas=0;
while (triunfos<3 && derrotas<3) {
    pc=aleatorio(1,3);
    jugador=prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera ")

    alert("PC elige: " + eleccion(pc));
    alert("Tu eliges: "+ eleccion(jugador));
    //pelea
    if (pc==jugador){
      alert("Empate");
    }else if(jugador==1 && pc==3){
      alert("Ganaste");
      triunfos++
    }else if (jugador==2 && pc==1) {
      alert("Ganaste");
      triunfos++
    }else if (jugador==3 && pc==2) {
      alert("Ganaste");
      triunfos++
    }else{
      alert("perdiste");
      derrotas++
  }
}
    alert("Ganaste: "+triunfos+" veces y perdistes: "+derrotas+"veces.")
