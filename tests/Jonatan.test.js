import FuncionesWordle from "../src/funcionesWordle";


describe('FuncionesWordle', () => {
    it('debería devolver la lista de palabras seleccionables', () => {
      // Arrange (preparar)
      const funcionesWordle = new FuncionesWordle();
      // Act (actuar)
      const resultado = funcionesWordle.obtenerListaPalabras();
      // Assert (verificar)
      expect(resultado).toEqual([
        "HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE",
        "RAYOS", "MESSI", "PALOS", "LIBRO", "LLAVE", "BALON", "CINCO"
      ]);
    });
    it('debería devolver la lista de las categorias de Deportes', () => {
      const funcionesWordle = new FuncionesWordle();
      const resultado = funcionesWordle.obtenerCategoriaDeporte();
      expect(resultado).toEqual(["MESSI", "BALON", "DUKE", "CINCO"]);
    });
  });