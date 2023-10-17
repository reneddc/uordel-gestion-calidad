import FuncionesWordle from "../src/funcionesWordle";


describe('FuncionesWordle', () => {
    let funcionesWordle;  

    beforeEach(() => {
      funcionesWordle = new FuncionesWordle();  
    });
    it('debería devolver la lista de palabras seleccionables', () => {
      const resultado = funcionesWordle.obtenerListaPalabras();
      expect(resultado).toEqual([
        "HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE",
        "RAYOS", "MESSI", "PALOS", "LIBRO", "LLAVE", "BALON", "CINCO"
      ]);
    });
    it('debería devolver la lista de las categorias de Deportes', () => {
      const resultado = funcionesWordle.obtenerCategoriaDeporte();
      expect(resultado).toEqual(["MESSI", "BALON", "DUKE", "CINCO"]);
    });
    it('debería devolver la lista de las categorias de Sistemas', () => {
      
      const resultado = funcionesWordle.obtenerCategoriaSistemas();
      expect(resultado).toEqual(["HOLA", "PERO"]);
    });
    it('deberia concatenar correctamente la cadena de resultado', () => {
      
      expect(funcionesWordle.cadenaResultado).toBeUndefined();
      funcionesWordle.cadenaResultado = ["H", "O", "L", "A"];
      funcionesWordle.concatenarResultado();
      expect(funcionesWordle.cadenaResultado).toEqual("HOLA");
    });
    it('debería agregar la pista correctamente', () => {
      
      funcionesWordle.nroIntentos = 3; 
      funcionesWordle.cadenaResultado = 'LOBO'; 
      funcionesWordle.agregarPista();
      expect(funcionesWordle.listaPistas[2]).toEqual('LOBO');
    });
    it('deberia mostrar un mensaje de error: Ya existe esa palabra.', () => {
      
      expect(() => {
        funcionesWordle.definirNuevaPalabra('LLAVE');
      }).toThrowError('Ya existe esa palabra.');
    });
    it('deberia agregar la nueva palabra al array de palabras seleccionables', () => {
      
      expect(() => {
        funcionesWordle.definirNuevaPalabra('CINE');
      }).not.toThrow();
      expect(funcionesWordle.palabrasSeleccionables).toContain('CINE');
      expect(funcionesWordle.tamPalabrasSeleccionables).toBe(17); 
    });

    it('deberia manejar la excepción y retornar el mensaje correcto al agregar una palabra existente', () => {
     
      const resultado = funcionesWordle.agregarNuevaPalabra('HOJA');
      expect(resultado).toBe('Ya existe esa palabra.');
      expect(funcionesWordle.palabrasSeleccionables).toContain('HOJA');
    });

    it('deberia agregar correctamente una palabra nueva y retornar la palabra', () => {
    
      const resultado = funcionesWordle.agregarNuevaPalabra('NUEVA');
      expect(resultado).toBe('NUEVA');
      expect(funcionesWordle.palabrasSeleccionables).toContain('NUEVA');
    });

    it("no deberia marcarse como amarilla si no está en la palabra secreta ", () => {
      
      funcionesWordle.cadenaResultado = ['X', 'X', 'X', 'X', 'X', 'X'];
      funcionesWordle.copiaPalabraSecreta = ['H', 'O', 'J', 'A'];
      funcionesWordle.definirAmarillas(['H', 'O', 'J', 'A'], ['H', 'X', 'X', 'A']);
      expect(funcionesWordle.cadenaResultado).toEqual(['a', 'X', 'X', 'a', 'X', 'X']);
    });
    it("deberia devolver la misma cadena resultado", () => {
      
      funcionesWordle.cadenaResultado = ['X', 'X', 'X', 'X', 'X', 'X'];
      funcionesWordle.copiaPalabraSecreta = ['H', 'O', 'J', 'A'];
      funcionesWordle.definirAmarillas(['H', 'O', 'J', 'A'], ['Y', 'Z', 'W', 'X']);
      expect(funcionesWordle.cadenaResultado).toEqual(['X', 'X', 'X', 'X', 'X', 'X']);
    });
    it("deberia devolver la misma cadena resultado y se mantiene sin cambios", () => {
      
      funcionesWordle.cadenaResultado = ['z', 'z', 'z', 'z', 'z', 'z'];
      funcionesWordle.copiaPalabraSecreta = ['H', 'O', 'J', 'A'];
      funcionesWordle.definirAmarillas(['H', 'O', 'J', 'A'], ['X', 'Y', 'W', 'X']);
      expect(funcionesWordle.cadenaResultado).toEqual(['z', 'z', 'z', 'z', 'z', 'z']);
    });
    it("deberia devolver la mismca cadena resultado sin entradas", () => {
     
      funcionesWordle.cadenaResultado = ['X', 'X', 'X', 'X', 'X', 'X'];
      funcionesWordle.copiaPalabraSecreta = ['H', 'O', 'J', 'A'];
      funcionesWordle.definirAmarillas([], []);
      expect(funcionesWordle.cadenaResultado).toEqual(['X', 'X', 'X', 'X', 'X', 'X']);
    });

    it("deberia devolver una palabra al azar del array de categoria deportes", () => {
      
      const palabraSec = funcionesWordle.definirPalabraSecretaAlAzar("Deporte");
      expect(funcionesWordle.categoriaDeporte).toContain(palabraSec);
    });
    it("deberia devolver una palabra al azar del array de categoria UCB", () => {
     
      const palabraSec = funcionesWordle.definirPalabraSecretaAlAzar("UCB");
      expect(funcionesWordle.categoriaUCB).toContain(palabraSec);
    });
    it("deberia devolver una palabra al azar del array de categoria Sistemas", () => {

      const palabraSec = funcionesWordle.definirPalabraSecretaAlAzar("Sistemas");
      expect(funcionesWordle.categoriaSistemas).toContain(palabraSec);
    });
    it("deberia devolver una palabra al azar del array de categoria que no existe", () => {

      const palabraSec = funcionesWordle.definirPalabraSecretaAlAzar("CualquierCategoriaQueNoExiste");
      expect(funcionesWordle.palabrasSeleccionables).toContain(palabraSec);
    });
  });