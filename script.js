/* -------------------------------
  create the image gallery
----------------------------------*/
var ImageGallery = document.getElementById('galleryList')

var ImageSrc = this.src // Get the source of the clicked image

// Loop from 1 to 12 for the gallery images
for (let index = 1; index <= 12; index++) {
  var listItem = document.createElement('li') // Create a new <li> element in each iteration
  var image = document.createElement('img') // Create a new <img> element in each iteration
  image.classList.add('openDialog') // Add the class "openDialog" to the <li> for styling and event handling
  image.addEventListener('click', openDialog)
  image.src = `./Assets/galleryImage/photo${index}.jpg` // Set the source path of the image
  image.alt = `photo number ${index} from gallery` // Set the alt text for accessibility
  image.dataset.index = index // Store the index of the image in a data attribute for later use
  ImageGallery.appendChild(listItem) // Add the <li> to the <ul> (gallery)
  listItem.appendChild(image) // Add the <img> inside the <li>
}
