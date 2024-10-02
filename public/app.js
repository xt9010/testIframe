// app.js
document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
  
    // Obtener el parámetro "token" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    // Asignar el token al formulario de pago
    if (token) {
      paymentForm.setAttribute("kr-form-token", token);
    }

  });
  