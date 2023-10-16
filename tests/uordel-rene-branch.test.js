import funcionesWordle from "../src/funcionesWordle"

describe("(Sencillos) Tests Unitarios para clase funcionesWordel", () => {

    let wordle = new funcionesWordle()
    const palabraSecreta = "HOLA";
    
    test("Método definir tamanio palabra secreta debe devolver el tamaño correcto" , () => {
        const valorEsperado = 4;
        const valorActual = wordle.definirTamanioPalabraSecreta(palabraSecreta);
        expect(valorActual).toBe(valorEsperado);
    });
    
    test("Método definir lista pistas debería devolver la lista de las pistas" , () => {
        const valorEsperado  = ["X", "X", "X", "X", "X", "X"];
        const valorActual = wordle.definirListaPistas();
        expect(valorActual).toHaveLength(6);
        expect(valorActual).toEqual(valorEsperado );
    });

    
    test("Método obtener pista al azar debe devolver una letra de la palabra secreta, en este caso la primera letra" , () => {
        const valorActual = wordle.obtenerPistaAlAzar(palabraSecreta);
        const valorEsperado = "H";
        expect(valorActual).toBe(valorEsperado);
        expect(palabraSecreta).toContain(valorActual);
    });

    test("Método obtener posicion pista al azar debe devolver un valor random entre los rangos de 0 al tamaño de la palabra secreta menos 1" , () => {
        const valorActual = wordle.obtenerPosicionPistaAlAzar(palabraSecreta)
        expect(valorActual).toBeGreaterThanOrEqual(0);
        expect(valorActual).toBeLessThanOrEqual(3);
        const segundoValorActual = wordle.obtenerPosicionPistaAlAzar(palabraSecreta)
        expect(segundoValorActual).toBeGreaterThanOrEqual(0);
        expect(segundoValorActual).toBeLessThanOrEqual(3);

        //expect(secondActualValue).not.toBe(actualValue);
    });

    test("Método definir historial de intentos debe devolver la lista de los intentos" , () => {
        const valorEsperado = ["X", "X", "X", "X", "X", "X"];
        const valorActual = wordle.definirHistorialIntentos();
        expect(valorActual).toHaveLength(6);
        expect(valorActual).toEqual(valorEsperado);
    });
})

describe("(Medio) Tests Unitarios para clase funcionesWordel", () => {

    let wordleLimpio = new funcionesWordle();
    let wordle = new funcionesWordle();
    const palabraSecreta = "HOLA";
    let palabrasSeleccionables;
    let valorActual;
    let valorEsperado;
    let cadenaResultado;

    beforeEach(() => {
        palabrasSeleccionables = wordleLimpio.obtenerListaPalabras();
        valorActual = null;
        valorEsperado = null;
        cadenaResultado = [];
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

    test("En el método definir azules, debe modificar los arrays  CadenaResultado y copiaPalabraSecreta si hay azules en la palabra" , () => {
        const intento = "HOJA";
        wordle.generarResultadoVacio(4);
        cadenaResultado = wordle.obtenerCadenaResultado();
        wordle.definirAzules(palabraSecreta,intento);
        expect(cadenaResultado).toContain("z");
        expect(cadenaResultado[0]).toMatch(/z/);
    });


})