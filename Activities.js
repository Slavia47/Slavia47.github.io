document.addEventListener('DOMContentLoaded', function() {// check for content being loaded from dom
  var images = document.getElementById('carouselImages');// create veriables with the html ids
  var caption = document.getElementById('carouselCaption');
  var prev = document.getElementById('carouselPrev');
  var next = document.getElementById('carouselNext');
  
  fetch("Gallary.json")// gets the json file that has the images attached

  .then(function(res) {// tels it to open what it will do with resopnse
    res.json().then(function(json) {// gets the json objests
      json.forEach(function(el, i) {// loops over jason array

        var image = document.createElement('img');// creates an image element

        image.setAttribute('src', el.url);      //gets url of immage
        image.setAttribute('alt', el.caption);   // gets caption
        image.setAttribute('title', el.caption);  //gets title

        images.appendChild(image);//ataches images to the carousel immage 
      });

      setupCarousel(json);//passes jason object through function
    });
  });

  function setupCarousel(json) {//function with argument that accepts json immage array

    var imageCount = images.childElementCount;//counts immages

    var currentImage = 1;//set currnet image in view

    var imageWidth = 500;//set immage width

    prev.addEventListener('click', function() {// check if the button to shop previous immage was clicked

      if(currentImage != 1) {//if the current immage isnt the first one

        --currentImage;// go back an immige number

        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';// moving animation to the left to display the previous immage
      }
      caption.innerText = json[currentImage - 1].caption;//updates the caption by also moving back one on the immage array to get its caption
    });
  

    next.addEventListener('click', function() {//calls function of when the forward button is clicked
  

      if(currentImage != imageCount) {// check if not last immage
  

        ++currentImage;// increases what immage it is on the array
  

        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';// moves to the next immage with the annimation
      }
      

      caption.innerText = json[currentImage - 1].caption;// changes the caption like the previous but in reverse.
    });
    

    caption.innerText = json[currentImage - 1].caption;
  }
  

  });