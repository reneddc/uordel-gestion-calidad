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
    it('debería devolver la lista de las categorias de Sistemas', () => {
      const funcionesWordle = new FuncionesWordle();
      const resultado = funcionesWordle.obtenerCategoriaSistemas();
      expect(resultado).toEqual(["HOLA", "PERO"]);
    });
    it('deberia concatenar correctamente la cadena de resultado', () => {
      const funcionesWordle = new FuncionesWordle();
      expect(funcionesWordle.cadenaResultado).toBeUndefined();
      funcionesWordle.cadenaResultado = ["H", "O", "L", "A"];
      funcionesWordle.concatenarResultado();
      expect(funcionesWordle.cadenaResultado).toEqual("HOLA");
    });
    it('debería agregar la pista correctamente', () => {
      const funcionesWordle = new FuncionesWordle();

      funcionesWordle.nroIntentos = 3; 
      funcionesWordle.cadenaResultado = 'LOBO'; 

      funcionesWordle.agregarPista();

      expect(funcionesWordle.listaPistas[2]).toEqual('LOBO');
    });
  });