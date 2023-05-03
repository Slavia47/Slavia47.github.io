var gallery = document.getElementById('gallery');//create a veriable that gets gallery element by id from html
fetch("Gallary.json")//gets the json with the immages
.then(function(res) {// then put in function to allow us to tell it what to do with the json
  res.json().then(function(json) {////get the json view of object
    json.forEach(function(el) {// loop over object with the pictures
      var galleryItem = document.createElement('a');//creates a veriable linked with the a element
      galleryItem.setAttribute('class', 'gallery-item');//gives divs classnames
      galleryItem.setAttribute('href', el.url);//makes the ancors a href element
      galleryItem.setAttribute('target', '_blank');//allows for opening immages in a new tab calling the _ for the opener
      var image = document.createElement('img');//sets a veriable that cerates an immage element
      image.setAttribute('src', el.url); //sets immage url atribute
      image.setAttribute('alt', el.caption);//sets tje alternative text atribute
      image.setAttribute('title', el.caption);//sets the title
      var caption = document.createElement('caption');// creates veriable for the caption under immage
      caption.innerText = el.caption;//adds the text to caption
      galleryItem.appendChild(image);//puts immage to the gallary container
      galleryItem.appendChild(caption);//puts the caption to the gallary container
      gallery.appendChild(galleryItem);//appends the gallary to gallary elemnt
    });
  });
});
