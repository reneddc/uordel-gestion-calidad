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

    
});
