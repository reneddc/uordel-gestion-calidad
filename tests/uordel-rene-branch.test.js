import funcionesWordle from "../src/funcionesWordle"

describe("(Sencillos) Tests Unitarios para clase funcionesWordel", () => {

    let wordle = new funcionesWordle();
    let valorActual;
    let valorEsperado;
    let palabraSecreta;

    beforeEach(() => {
        valorActual = null;
        valorEsperado = null;
        palabraSecreta = "HOLA"
    });
    
    test("Método definir tamanio palabra secreta debe devolver el tamaño correcto" , () => {
        valorEsperado = 4;
        valorActual = wordle.definirTamanioPalabraSecreta(palabraSecreta);
        expect(valorActual).toBe(valorEsperado);
    });
    
    test("Método definir lista pistas debería devolver la lista de las pistas" , () => {
        valorEsperado  = ["X", "X", "X", "X", "X", "X"];
        valorActual = wordle.definirListaPistas();
        expect(valorActual).toHaveLength(6);
        expect(valorActual).toEqual(valorEsperado );
    });

    
    test("Método obtener pista al azar debe devolver una letra de la palabra secreta, en este caso la primera letra" , () => {
        valorActual = wordle.obtenerPistaAlAzar(palabraSecreta);
        valorEsperado = "H";
        expect(valorActual).toBe(valorEsperado);
        expect(palabraSecreta).toContain(valorActual);
    });

    test("Método obtener posicion pista al azar debe devolver un valor random entre los rangos de 0 al tamaño de la palabra secreta menos 1" , () => {
        valorActual = wordle.obtenerPosicionPistaAlAzar(palabraSecreta)
        expect(valorActual).toBeGreaterThanOrEqual(0);
        expect(valorActual).toBeLessThanOrEqual(3);
        const segundoValorActual = wordle.obtenerPosicionPistaAlAzar(palabraSecreta)
        expect(segundoValorActual).toBeGreaterThanOrEqual(0);
        expect(segundoValorActual).toBeLessThanOrEqual(3);

        //expect(secondActualValue).not.toBe(actualValue);
    });

    test("Método definir historial de intentos debe devolver la lista de los intentos" , () => {
        valorEsperado = ["X", "X", "X", "X", "X", "X"];
        valorActual = wordle.definirHistorialIntentos();
        expect(valorActual).toHaveLength(6);
        expect(valorActual).toEqual(valorEsperado);
    });
})


describe("(Medio) Tests Unitarios para clase funcionesWordel", () => {

    let wordleLimpio = new funcionesWordle();
    let wordle = new funcionesWordle();
    let palabraSecreta;
    let palabrasSeleccionables;
    let valorActual;
    let valorEsperado;
    let cadenaResultado;

    beforeEach(() => {
        palabrasSeleccionables = wordleLimpio.obtenerListaPalabras();
        valorActual = null;
        valorEsperado = null;
        cadenaResultado = [];
        palabraSecreta = "HOLA"
    });
    
    test("En el método definir palabra secreta si ingreso una palabra que no existe, debería agregarse la palabra a la lista de palabras existentes y devolverla" , () => {
        let nuevaPalabra = "ASUS";
        expect(palabrasSeleccionables).not.toContain(nuevaPalabra);
        valorEsperado = "ASUS";
        valorActual = wordle.definirPalabraSecreta(nuevaPalabra);
        palabrasSeleccionables = wordle.obtenerListaPalabras();
        expect(palabrasSeleccionables).toContain(nuevaPalabra);
        expect(valorActual).toBe(valorEsperado);
    });

    test("En el método definir palabra secreta si ingreso una palabra que existe, NO debería agregarse la palabra a la lista de palabras existentes y debe devolverla" , () => {
        expect(palabrasSeleccionables).toContain(palabraSecreta);
        valorEsperado = palabraSecreta;
        valorActual = wordle.definirPalabraSecreta(palabraSecreta);
        expect(valorActual).toBe(valorEsperado);
    });

    test("En el método definir azules, debe modificar los arrays CadenaResultado y copiaPalabraSecreta si hay azules en la palabra" , () => {
        const intento = "HOJA";
        wordle.generarResultadoVacio(4);
        wordle.definirAzules(palabraSecreta,intento);
        cadenaResultado = wordle.obtenerCadenaResultado();
        expect(cadenaResultado).toContain("z");
        expect(cadenaResultado[0]).toMatch(/z/);
    });

    test("En el método definir azules, no debe modificar los arrays CadenaResultado y copiaPalabraSecreta porque no hay azules en la palabra" , () => {
        const intento = "UBER";
        wordle.generarResultadoVacio(4);
        wordle.definirAzules(palabraSecreta,intento);
        cadenaResultado = wordle.obtenerCadenaResultado();
        expect(cadenaResultado).not.toContain("z");
        cadenaResultado.forEach((cadena) => {
            expect(cadena).not.toMatch(/z/);
            expect(cadena).toMatch(/o/);
        });
    });

    test("En el método definir azules, no debe modificar los arrays CadenaResultado y copiaPalabraSecreta porque la palabra secreta estña vacía" , () => {
        const intento = "HOJA";
        palabraSecreta = "";
        wordle.generarResultadoVacio(palabraSecreta.length);
        wordle.definirAzules(palabraSecreta,intento);
        cadenaResultado = wordle.obtenerCadenaResultado();
        expect(cadenaResultado).toHaveLength(0);
        expect(cadenaResultado).not.toContain("z");
    });

    test("En el método definir cadena resultado debe modificar los atributos de la cadenaResultado y sus similares si aún hay intentos disponibles" , () => {
        const intento = "PALO";
        wordle.limpiarListaIntentos();
        wordle.definirIntento(intento,4);
        wordle.definirCadenaResultado(palabraSecreta, intento);
        let cadenaResultadoActual = wordle.obtenerCadenaResultado();
        let listaPistasActual = wordle.definirListaPistas();
        let cadenaResultadoEsperada = "oaza";
        let listaPistaEsperada = ['oaza', 'X', 'X', 'X', 'X', 'X'];
        expect(cadenaResultadoActual).toBe(cadenaResultadoEsperada);
        expect(listaPistasActual).toEqual(listaPistaEsperada);
    });

    test("En el método definir cadena resultado debe modificar los atributos de la cadenaResultado y sus similares si ya no hay más intentos disponibles" , () => {
        let intento = "PALO";
        wordle.limpiarListaIntentos();
        let listaPistas= wordle.definirListaPistas();
        listaPistas.forEach((pista) => {
            wordle.definirIntento(intento,4);
            wordle.definirCadenaResultado(palabraSecreta, intento);
        });
        intento = "HOJA";
        wordle.definirCadenaResultado(palabraSecreta, intento);
        let cadenaResultadoActual = wordle.obtenerCadenaResultado();
        let listaPistasActual = wordle.definirListaPistas();
        expect(cadenaResultadoActual).not.toBe("HOJA");
        expect(listaPistasActual).not.toContain("HOJA");
    });

    test("En el método definir resultado juego debe devolver PERDEDOR si el intento no es igual a la palabra secreta y ya no hay más intentos (6)" , () => {
        let intento = "PALO";
        wordle.limpiarListaIntentos();
        let listaPistas= wordle.definirListaPistas();
        listaPistas.forEach((pista) => {
            wordle.definirIntento(intento,4);
            wordle.definirCadenaResultado(palabraSecreta, intento);
        });
        valorActual = wordle.definirResultadoJuego(intento,palabraSecreta);
        valorEsperado = "Perdedor";
        expect(valorActual).toBe(valorEsperado);
    });

    test("En el método definir resultado juego debe devolver GANADOR si el intento es igual a la palabra secreta" , () => {
        let intento = "HOLA";
        wordle.limpiarListaIntentos();
        wordle.definirIntento(intento,4);
        wordle.definirCadenaResultado(palabraSecreta, intento);
        valorActual = wordle.definirResultadoJuego(intento,palabraSecreta);
        valorEsperado = "Ganador";
        expect(valorActual).toBe(valorEsperado);
    });

    test("En el método definir resultado juego debe devolver ACTIVO si el intento no es igual a la palabra secreta y aún hay más intentos (6)" , () => {
        let intento = "PALO";
        wordle.limpiarListaIntentos();
        wordle.definirIntento(intento,4);
        wordle.definirCadenaResultado(palabraSecreta, intento);
        valorActual = wordle.definirResultadoJuego(intento,palabraSecreta);
        valorEsperado = "Activo";
        expect(valorActual).toBe(valorEsperado);
    });
})

describe("(Alto) Tests Unitarios para clase funcionesWordel", () => {

    let wordle = new funcionesWordle();
    let valorActual;
    let valorEsperado;

    beforeEach(() => {
        valorActual = null;
        valorEsperado = null;
    });
    
    test("En el método definir categorias debe modificar la categoría DEPORTES" , () => {
        let nuevaPalabra = "GOL";
        let categoria = ["Deporte"]
        wordle.definirNuevaPalabra(nuevaPalabra);
        wordle.definirCategorias(categoria);
        valorActual = wordle.obtenerCategoriaDeporte();
        valorEsperado = ["MESSI", "BALON", "DUKE", "CINCO", "GOL"]
        expect(valorActual).toContain(nuevaPalabra);
        expect(valorActual).toEqual(valorEsperado);
    });

    
    test("En el método definir categorias debe modificar la categoría UCB" , () => {
        let nuevaPalabra = "CATO";
        let categoria = ["UCB"]
        wordle.definirNuevaPalabra(nuevaPalabra);
        wordle.definirCategorias(categoria);
        valorActual = wordle.obtenerCategoriaUCB();
        valorEsperado = ["LOBO", "LIBRO", "LLAVE", "CATO"]
        expect(valorActual).toContain(nuevaPalabra);
        expect(valorActual).toEqual(valorEsperado);
    });
})