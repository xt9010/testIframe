// app.js
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  let token = urlParams.get("token");

  // Escuchar mensajes desde React Native WebView
  window.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if (data.token) {
      token = data.token;
      KR.setFormConfig({ formToken: token });
    }
  });

  // Si ya hay un token en la URL, configúralo de inmediato
  if (token) {
    KR.setFormConfig({ formToken: token });
  }
  
});
