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
    it('deberia mostrar un mensaje de error: Ya existe esa palabra.', () => {
      const funcionesWordle = new FuncionesWordle();
      expect(() => {
        funcionesWordle.definirNuevaPalabra('LLAVE');
      }).toThrowError('Ya existe esa palabra.');
    });
    it('deberia agregar la nueva palabra al array de palabras seleccionables', () => {
      const funcionesWordle = new FuncionesWordle();
      expect(() => {
        funcionesWordle.definirNuevaPalabra('CINE');
      }).not.toThrow();
      expect(funcionesWordle.palabrasSeleccionables).toContain('CINE');
      expect(funcionesWordle.tamPalabrasSeleccionables).toBe(17); 
    });

    it('deberia manejar la excepción y retornar el mensaje correcto al agregar una palabra existente', () => {
      const funcionesWordle = new FuncionesWordle();
      const resultado = funcionesWordle.agregarNuevaPalabra('HOJA');
      expect(resultado).toBe('Ya existe esa palabra.');
      expect(funcionesWordle.palabrasSeleccionables).toContain('HOJA');
    });

    it('deberia agregar correctamente una palabra nueva y retornar la palabra', () => {
      const funcionesWordle = new FuncionesWordle();
      const resultado = funcionesWordle.agregarNuevaPalabra('NUEVA');
      expect(resultado).toBe('NUEVA');
      expect(funcionesWordle.palabrasSeleccionables).toContain('NUEVA');
    });

    it("no deberia marcarse como amarilla si no está en la palabra secreta ", () => {
      const funcionesWordle = new FuncionesWordle();
      funcionesWordle.cadenaResultado = ['X', 'X', 'X', 'X', 'X', 'X'];
      funcionesWordle.copiaPalabraSecreta = ['H', 'O', 'J', 'A'];
  
      funcionesWordle.definirAmarillas(['H', 'O', 'J', 'A'], ['H', 'X', 'X', 'A']);
      expect(funcionesWordle.cadenaResultado).toEqual(['a', 'X', 'X', 'a', 'X', 'X']);
    });

  });