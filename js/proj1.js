const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    event.preventDefault();
    window.alert("There is no backend to handle information");
  }
  


  