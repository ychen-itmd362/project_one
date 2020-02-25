var form = document.getElementById('form');

form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    event.preventDefault();
    window.alert("There is no backend to handle information");
  }
  
var img = document.getElementById('image_button')

img.addEventListener('click', randomPic);

function randomPic(event) {
    var random =Math.ceil(Math.random() * 4);
    //console.log(random);

    switch(random){
        case 1:
            document.getElementById('dogpic').src = "img/dog1.jpg";
            break;
        case 2:
            document.getElementById('dogpic').src = "img/dog2.jpeg";
            break;
        case 3:
            document.getElementById('dogpic').src = "img/dog3.jpg";
            break;
        case 4:
            document.getElementById('dogpic').src = "img/dog4.jpg";
            break;
    }
  }