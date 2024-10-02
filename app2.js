let size = 10; // Tamaño del plano
let plane = "";

for (let y = size; y >= -size; y--) {
  for (let x = -size; x <= size; x++) {
    if (x === 0 && y === 0) {
      plane += "+"; // Origen
    } else if (x === 0) {
      plane += "|"; // Eje Y
    } else if (y === 0) {
      plane += "-"; // Eje X
    } else if (Math.abs(x) === Math.abs(y)) {
      plane += "*"; // Puntos en la diagonal
    } else {
      plane += " "; // Espacios vacíos
    }
  }
  plane += "\n";
}

console.log(plane);
