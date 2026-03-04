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

/* -------------------------------
   Open Dialog content and update dialog title, image source and counter
----------------------------------*/
function openDialog() {
  dialogWindows.showModal()
  var imageName = this.src.substring(this.src.lastIndexOf('/') + 1) // Extract the image file name from the source path
  var ImageSrc = this.src // Get the source of the clicked image
  // var currentIndex = this.dataset.index // Get the index of the clicked image from the data attribute
  currentIndex = Number(this.dataset.index)
  document.getElementById('dialogTitle').textContent = imageName // Update the dialog title with the image file name
  document.getElementById('dialogImage').src = ImageSrc // Set the source of the dialog image to the clicked image
  document.getElementById('counter').textContent = `${currentIndex} / 12` // Update the counter with the current image index and total number of images
}

/* -------------------------------
   Close Button
----------------------------------*/
// Get reference to the <dialog> element
var dialogWindows = document.getElementById('dialog')
// Get reference to the close button inside the dialog
var btnClose = document.getElementById('closeDialog')
btnClose.addEventListener('click', closeDialog)
function closeDialog() {
  dialogWindows.close()
}
/* -------------------------------
   Navigation Buttons
----------------------------------*/
var currentIndex = 1
var totalImages = 12

var btnNext = document.getElementById('dialogNext')
btnNext.addEventListener('click', showNextImage)

function showNextImage() {
  if (currentIndex < totalImages) {
    currentIndex++
  } else {
    currentIndex = 1
  }
  var newPath = `./Assets/galleryImage/photo${currentIndex}.jpg`
  document.getElementById('dialogImage').src = newPath
  document.getElementById('dialogTitle').textContent = `photo${currentIndex}.jpg`
  document.getElementById('counter').textContent = `${currentIndex} / ${totalImages}`
}

var btnPrev = document.getElementById('dialogPrev')

btnPrev.addEventListener('click', showPreviousImage)
function showPreviousImage() {
  if (currentIndex > 1) {
    currentIndex--
  } else {
    currentIndex = totalImages
  }
  var newPath = `./Assets/galleryImage/photo${currentIndex}.jpg`
  document.getElementById('dialogImage').src = newPath
  document.getElementById('dialogTitle').textContent = `photo${currentIndex}.jpg`
  document.getElementById('counter').textContent = `${currentIndex} / ${totalImages}`
}
