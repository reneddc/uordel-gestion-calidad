import FuncionesWordle from "../src/funcionesWordle";

import WordleError from "../src/ExcepcionesWordle";

describe("generarResultadoVacio", () => {
    let funcionesWordle;

    beforeEach(() => {
        funcionesWordle = new FuncionesWordle();
    });
    /*------------------------------1.generarResultadoVacio ----------------------------------*/

    it("debería generar un resultado vacío con la longitud correcta", () => {
        const tamPalabraSecreta = 5; // Establece la longitud deseada

        funcionesWordle.generarResultadoVacio(tamPalabraSecreta);

        expect(funcionesWordle.cadenaResultado).toHaveLength(tamPalabraSecreta);
        expect(
            funcionesWordle.cadenaResultado.every((letra) => letra === "o")
        ).toBe(true);
    });

    /*--------------------------------2.esIntentoIncompleto--------------------------------*/

    it("debería lanzar una excepción WordleError cuando la palabra es incompleta", () => {
        const intento = "hola";
        const tamPalabraSecreta = 6;

        // Utiliza una aserción para verificar que se lance una excepción WordleError con el mensaje correcto
        expect(() =>
            funcionesWordle.esIntentoIncompleto(intento, tamPalabraSecreta)
        ).toThrowError(WordleError, "Palabra Incompleta");
    });

    it("no debería lanzar una excepción cuando la palabra es completa", () => {
        const intento = "palabra";
        const tamPalabraSecreta = 7;
        // No se espera que se lance una excepción
        expect(() =>
            funcionesWordle.esIntentoIncompleto(intento, tamPalabraSecreta)
        ).not.toThrow();
    });

    /*-------------------------------3. esIntentoPermitido---------------------------------*/

    it("debería lanzar una excepción WordleError cuando el intento no está en la lista de palabras seleccionables", () => {
        const intento = "palabraNoPermitida"; // Introduce una palabra no permitida

        expect(() => funcionesWordle.esIntentoPermitido(intento)).toThrowError(
            WordleError,
            "No existe esa palabra."
        );
    });

    it("no debería lanzar una excepción cuando el intento está en la lista de palabras seleccionables", () => {
        const intento = "HOLA"; 
        expect(() => funcionesWordle.esIntentoPermitido(intento)).not.toThrow();
    });

    
    /*-------------------------------4. limpiarListaIntentos---------------------------------*/

    it('debería limpiar las listas de intentos y las pistas', () => {
        funcionesWordle.listaIntentos = ['A', 'B', 'C', 'D', 'E', 'F'];
        funcionesWordle.listaPistas = ['Pista1', 'Pista2', 'Pista3', 'Pista4', 'Pista5', 'Pista6'];
        funcionesWordle.nroIntentos = 6;
    
        funcionesWordle.limpiarListaIntentos();
    
        expect(funcionesWordle.listaIntentos).toEqual(['X', 'X', 'X', 'X', 'X', 'X']);
        expect(funcionesWordle.listaPistas).toEqual(['X', 'X', 'X', 'X', 'X', 'X']);
      });
    
      it('debería restablecer nroIntentos a 0', () => {
        funcionesWordle.nroIntentos = 5;
            funcionesWordle.limpiarListaIntentos();
            expect(funcionesWordle.nroIntentos).toBe(0);
      });
       
    /*-------------------------------5. - obtenerCategoriaUCB---------------------------------*/
    it('debería devolver la categoría UCB', () => {
        const categoriaUCB = 'UCB'; 
        funcionesWordle.categoriaUCB = categoriaUCB;
        const resultado = funcionesWordle.obtenerCategoriaUCB();
        expect(resultado).toBe(categoriaUCB);
      });

    /*-------------------------------6. - agregarIntentoHistorial ---------------------------------*/
    it('debería agregar un intento al historial y aumentar el número de intentos', () => {
        const intento = 'palabra'; // Establece el intento deseado
        const nroIntentosInicial = funcionesWordle.nroIntentos;
         funcionesWordle.agregarIntentoHistorial(intento);
        expect(funcionesWordle.listaIntentos[nroIntentosInicial]).toBe(intento);
        expect(funcionesWordle.nroIntentos).toBe(nroIntentosInicial + 1);
      });

    /*-------------------------------7. - obtenerCadenaResultado ---------------------------------*/

    it('debería devolver la cadena de resultado', () => {
        const cadenaResultado = ['o', 'x', 'x', 'o', 'o']; // Establece la cadena de resultado deseada
    
        funcionesWordle.cadenaResultado = cadenaResultado;
            const resultado = funcionesWordle.obtenerCadenaResultado();
            expect(resultado).toEqual(cadenaResultado);
      });
        /*-------------------------------7. - defineNroIntents ---------------------------------*/

    it('debería devolver el número de intentos', () => {
        const nroIntentos = 5; // Establece el número de intentos deseado
        funcionesWordle.nroIntentos = nroIntentos;
            const resultado = funcionesWordle.definirNroIntentos();
            expect(resultado).toBe(nroIntentos);
      });
});
