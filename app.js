document.addEventListener("DOMContentLoaded", function () {  
window.addEventListener("message", (event) => {
      const data = JSON.parse(event?.data);
      if (!!data?.token) {
        token = data.token;
        KR.setFormConfig({ formToken: token });
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      KR.setFormConfig({ formToken: token });
    }

    KR.onSubmit(function (event) {
      console.log("El pago ha sido enviado:", event);
      const isSuccess = event?.clientAnswer?.orderStatus === "PAID";
      const status = isSuccess? "success" : "error";
      const message = isSuccess? "Pago realizado con éxito" : "El pago ha fallado. Por favor, inténtelo de nuevo.";
      const infoToJson = JSON.stringify({
        status: status,
        message: message,
        payload: event?.rawClientAnswer,
      })
      console.log({infoToJson})
      window.ReactNativeWebView.postMessage(
        infoToJson
      );
    });

    

    KR.onSuccess(function (event) {
      console.log("Pago exitoso:", event);
      // Envía los resultados al WebView
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          status: "success",
          message: "Pago realizado con éxito",
          payload: event,
        })
      );
    });
  
    KR.onError(function (event) {
      console.log("Error en el pago:", event);
      // Envía los resultados al WebView en caso de fallo
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          status: "error",
          message: "El pago ha fallado. Por favor, inténtelo de nuevo.",
          payload: event,
        })
      );
    });
  });
  