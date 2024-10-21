document.addEventListener("DOMContentLoaded", function () {  
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      KR.setFormConfig({ formToken: token });
    }

    KR.onSubmit(function (event) {
      const isSuccess = event?.clientAnswer?.orderStatus === "PAID";
      const status = isSuccess? "success" : "error";
      const message = isSuccess? "Pago realizado con éxito" : "El pago ha fallado. Por favor, inténtelo de nuevo.";
      const infoToJson = JSON.stringify({
        status: status,
        message: message,
        payload: event?.rawClientAnswer,
      })
      window.ReactNativeWebView.postMessage(
        infoToJson
      );
    });

    

    KR.onSuccess(function (event) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          status: "success",
          message: "Pago realizado con éxito",
          payload: event,
        })
      );
    });
  
    KR.onError(function (event) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          status: "error",
          message: "El pago ha fallado. Por favor, inténtelo de nuevo.",
          payload: event,
        })
      );
    });
  });
  if (token) {
    KR.setFormConfig({ formToken: token });
  }
