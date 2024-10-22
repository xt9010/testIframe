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
        payload: {
          krAnswerType: 'V4/Payment',
          krHash: event?.hash,
          krAnswer: event?.rawClientAnswer,
          krHashAlgorithm:  event?.hashAlgorithm
        },
      })
      window.ReactNativeWebView.postMessage(
        infoToJson
      );
    });
  });

