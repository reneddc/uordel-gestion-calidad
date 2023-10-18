import FuncionesWordle from "../src/funcionesWordle";


describe('generarResultadoVacio', () => {
    let funcionesWordle;
  
    beforeEach(() => {
      funcionesWordle = new FuncionesWordle();
    });
  
    it('debería generar un resultado vacío con la longitud correcta', () => {
      const tamPalabraSecreta = 5; // Establece la longitud deseada
  
      // Llama al método generarResultadoVacio con la longitud deseada
      funcionesWordle.generarResultadoVacio(tamPalabraSecreta);
  
      // Verifica que la propiedad cadenaResultado se haya generado correctamente
      expect(funcionesWordle.cadenaResultado).toHaveLength(tamPalabraSecreta);
      expect(funcionesWordle.cadenaResultado.every(letra => letra === 'o')).toBe(true);
    });

    
  });