// respuestaIpn.js

// Capturar los parámetros de la URL y mostrarlos en la consola
function getUrlParameters() {
    const params = new URLSearchParams(window.location.search); // Capturar todos los parámetros de la URL
    const paramsObj = {}; // Crear un objeto para almacenar los parámetros
  
    // Recorrer cada parámetro y almacenarlo en el objeto
    params.forEach((value, key) => {
      paramsObj[key] = value;
    });
  
    console.log("Parámetros de la URL recibidos:", paramsObj); // Mostrar los parámetros en la consola
    //alert("Parámetros recibidos: " + JSON.stringify(paramsObj)); // Mostrar los parámetros en una alerta para pruebas
  
    return paramsObj;
  }
  
  // Llamar a la función para obtener los parámetros de la URL
  const urlParams = getUrlParameters();
  
  // Luego puedes usar `urlParams` para manipular o acceder a los valores específicos de la URL
  // Ejemplo de cómo acceder a un parámetro específico:
  const orderStatus = urlParams['orderStatus'];
  console.log("Order Status:", orderStatus);
  