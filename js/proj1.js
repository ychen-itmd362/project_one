const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  


  