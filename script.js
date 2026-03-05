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
// When the close button is clicked, run the closeDialog function
btnClose.addEventListener('click', closeDialog)
// Function to close the dialog window
function closeDialog() {
  dialogWindows.close()// Call the function to close the dialog
}
/* -------------------------------
   Navigation Buttons
----------------------------------*/
// Store the current image number
var currentIndex = 1
// Total number of images in the gallery
var totalImages = 12
// Get reference to the "Next" button
var btnNext = document.getElementById('dialogNext')
// When the next button is clicked, show the next image
btnNext.addEventListener('click', showNextImage)
// Function to show the next image
function showNextImage() {
  // Check if the current image is less than the total images
  if (currentIndex < totalImages) {
    currentIndex++ // Go to the next image
  } else {
    currentIndex = 1 // If it is the last image, go back to the first
  }
  // Create the new image path
  var newPath = `./Assets/galleryImage/photo${currentIndex}.jpg`
  // Update the image inside the dialog with the new path
  document.getElementById('dialogImage').src = newPath
  // Update the dialog title with the image name
  document.getElementById('dialogTitle').textContent = `photo${currentIndex}.jpg`
  // Update the image counter with the current index and total images
  document.getElementById('counter').textContent = `${currentIndex} / ${totalImages}`
}
// Get reference to the "Previous" button
var btnPrev = document.getElementById('dialogPrev')
// When the previous button is clicked, show the previous image
btnPrev.addEventListener('click', showPreviousImage)
// Function to show the previous image
function showPreviousImage() {
  // Check if the current image number is greater than 1
  if (currentIndex > 1) {
    currentIndex-- // Go to the previous image
  } else {
    currentIndex = totalImages  // If it is the first image, go to the last
  }
  // Create the new image path
  var newPath = `./Assets/galleryImage/photo${currentIndex}.jpg`
  // Update the image inside the dialog
  document.getElementById('dialogImage').src = newPath
  // Update the dialog title with the image name
  document.getElementById('dialogTitle').textContent = `photo${currentIndex}.jpg`
  // Update the image counter
  document.getElementById('counter').textContent = `${currentIndex} / ${totalImages}`
}
