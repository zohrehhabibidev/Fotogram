const mygallery = [
  'photo1',
  'photo2',
  'photo3',
  'photo4',
  'photo5',
  'photo6',
  'photo7',
  'photo8',
  'photo9',
  'photo10',
  'photo11',
  'photo12'
]
const imageGallery = document.getElementById('galleryList')
const dialogWindow = document.getElementById('dialog')
const dialogImage = document.getElementById('dialogImage')
const dialogTitle = document.getElementById('dialogTitle')
const counter = document.getElementById('counter')
const dialogContent = document.getElementById('dialogContent')

const btnClose = document.getElementById('closeDialog')
const btnNext = document.getElementById('dialogNext')
const btnPrev = document.getElementById('dialogPrev')
let imageName = ''
let currentIndex = ''

/* -------------------------------
  Generate gallery images with innerHTML
----------------------------------*/
function init() {
  renderImages()
}

function renderImages() {
  for (let index = 0; index < mygallery.length; index++) {
    imageGallery.innerHTML += `
    <li>
      <img
        src="./assets/galleryImage/${mygallery[index]}.jpg"
        alt="photo number ${index} from gallery"
        class="openDialog"
        id="${index}"
        tabindex="0"
        onclick='openDialog(${index})'
        }
      >
    </li>
  `
  }
}

/* -------------------------------
  Open Dialog
----------------------------------*/
function openDialog(i) {
  currentIndex = i
  dialogImage.src = `./assets/galleryImage/${mygallery[currentIndex]}.jpg`
  imageName = mygallery[currentIndex]
  dialogTitle.textContent = imageName
  updateCounter()
  dialogWindow.showModal()
}

/* -------------------------------
  Close Dialog
----------------------------------*/
function closeBtn() {
  dialogWindow.close()
}

// close when clicking outside dialog content
dialog.onclick = function (clickEvent) {
  if (clickEvent.target === dialog) {
    dialog.close()
  }
}
/* -------------------------------
  Navigation Buttons
----------------------------------*/
function showNextImage() {
  if (currentIndex < mygallery.length - 1) {
    currentIndex = currentIndex + 1
  } else {
    currentIndex = 0
  }

  updateDialogImage()
}

function showPreviousImage() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1
  } else {
    currentIndex = mygallery.length - 1
  }
  updateDialogImage()
}

/* -------------------------------
  Update Dialog Content
----------------------------------*/
function updateDialogImage() {
  dialogImage.src = `./assets/galleryImage/${mygallery[currentIndex]}.jpg`
  imageName = mygallery[currentIndex]
  dialogTitle.textContent = imageName
  updateCounter()
}

function updateCounter() {
  counter.textContent = `${currentIndex + 1} / ${mygallery.length}`
}
