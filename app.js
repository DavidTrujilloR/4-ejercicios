function printArrowDown() {
    const height = 5; // Altura de la flecha
    const width = height * 2 - 1; // Ancho de la parte superior

    // Parte superior de la flecha
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' '; // Espacios a la izquierda
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*'; // Parte de la flecha
        }
        console.log(row);
    }

    // Parte inferior de la flecha (tronco)
    for (let i = 0; i < 3; i++) { // Tres líneas para el tronco
        let row = '';
        for (let j = 0; j < height - 1; j++) {
            row += ' '; // Espacios a la izquierda
        }
        row += '***'; // Parte del tronco
        console.log(row);
    }
}

printArrowDown();

