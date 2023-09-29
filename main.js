function calcularValorFinal(precio, cuotas) {
    let valorFinal = 0;
  
    switch (cuotas) {
      case 1:
      case 2:
      case 3:
        valorFinal = precio;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        valorFinal = precio * 1.15;
        break;
      case 10:
      case 11:
      case 12:
        valorFinal = precio * 1.30;
        break;
      default:
        alert("Por favor, seleccione entre 1 y 12 cuotas.");
        break;
    }
  
    return valorFinal;
  }
  
  let nombre = prompt("BIENVENIDO A CASA TECNOSTERN.\nIngrese su nombre: ");  
  let producto = prompt("Ingrese el nombre del producto que compró:");  
  let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));  
  let cuotas = parseInt(prompt("En cuántas cuotas desea pagar: \n (1-3) Sin interes. \n (4-9) Recargo de un 15%. \n (10-12) Recargo del 30%"));  
  let valorFinal = calcularValorFinal(precioProducto, cuotas);
  
  if (cuotas >= 1 && cuotas <= 12) {
    alert(`Hola ${nombre}, usted compró el producto "${producto}"\nEn ${cuotas} cuotas con un valor final de ${valorFinal.toFixed(2)}.\nEn ${cuotas} cuotas de ${valorFinal.toFixed(2)/cuotas} cada una`);
  }