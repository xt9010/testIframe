// respuestaIpn.js

// Capturar los parámetros de la URL y mostrarlos en la consola
function getUrlParameters() {
    //alert("Parámetros recibidos: " + JSON.stringify(paramsObj)); // Mostrar los parámetros en una alerta para pruebas
    window.ReactNativeWebView.postMessage(JSON.stringify({
        status: 'error',
        message: 'El pago ha fallado. Por favor, inténtelo de nuevo.',
      }));
  }
  
  // Llamar a la función para obtener los parámetros de la URL
  const urlParams = getUrlParameters();
  
  
