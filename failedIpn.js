document.addEventListener("DOMContentLoaded", () => {
    // Capturar los datos enviados por POST usando FormData
    const paramsObj = {}; 

    try {
        new FormData(document.forms[0]).forEach((value, key) => {
            paramsObj[key] = value;
        });
        // Enviar los datos al WebView de React Native
        window.ReactNativeWebView.postMessage(JSON.stringify({
            status: 'error',
            message: 'El pago ha fallado. Por favor, inténtelo de nuevo.',
            payload: paramsObj,
        }));
    } catch (error) {
        console.error("Error procesando los datos de POST:", error);
    }
});
