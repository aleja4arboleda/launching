document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = 'Gracias por suscribirte con ' + email + '! Estaremos en contacto pronto.';
  });
  
  // Countdown timer
  function countdown() {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 21); // Set end date 21 days from now
  
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var distance = endDate.getTime() - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('countdown').innerHTML = 'Lanzamiento en: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '¡Ya lanzamos!';
      }
    }, 1000);
  }
  
  countdown(); // Start countdown
  