let currentIndex = 1
const totalImages = 12

const imageGallery = document.getElementById('galleryList')
const dialogWindows = document.getElementById('dialog')
const dialogImage = document.getElementById('dialogImage')
const dialogTitle = document.getElementById('dialogTitle')
const counter = document.getElementById('counter')

const btnClose = document.getElementById('closeDialog')
const btnNext = document.getElementById('dialogNext')
const btnPrev = document.getElementById('dialogPrev')

/* -------------------------------
  Generate gallery images with innerHTML
----------------------------------*/

for (let index = 1; index <= totalImages; index++) {
  imageGallery.innerHTML += `
    <li>
      <img
        src="./assets/galleryImage/photo${index}.jpg"
        alt="photo number ${index} from gallery"
        class="openDialog"
        data-index="${index}"
        tabindex="0"
      >
    </li>
  `
}

/* -------------------------------
  Add event listeners for all images
----------------------------------*/
const galleryImages = document.querySelectorAll('.openDialog')

galleryImages.forEach(img => {
  img.addEventListener('click', openDialog)
  img.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      openDialog.call(this)
    }
  })
})

/* -------------------------------
  Open Dialog
----------------------------------*/
function openDialog() {
  dialogWindows.showModal()
  currentIndex = Number(this.dataset.index)
  dialogImage.src = this.src
  const imageName = this.src.split('/').pop()
  dialogTitle.textContent = imageName
  updateCounter()
  document.body.style.overflowY = 'hidden' // prevent background scroll
}

/* -------------------------------
  Close Dialog
----------------------------------*/
btnClose.addEventListener('click', () => {
  dialogWindows.close()
  document.body.style.overflowY = 'auto'
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    dialogWindows.close()
    document.body.style.overflowY = 'auto'
  }
})

// close when clicking outside dialog content
dialogWindows.addEventListener('click', function (event) {
  if (event.target === dialogWindows) {
    // only if click on backdrop
    dialogWindows.close()
    document.body.style.overflowY = 'auto'
  }
})

/* -------------------------------
  Navigation Buttons
----------------------------------*/
btnNext.addEventListener('click', showNextImage)
btnPrev.addEventListener('click', showPreviousImage)

function showNextImage() {
  currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1
  updateDialogImage()
}

function showPreviousImage() {
  currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages
  updateDialogImage()
}

/* -------------------------------
  Update Dialog Content
----------------------------------*/
function updateDialogImage() {
  dialogImage.src = `./assets/galleryImage/photo${currentIndex}.jpg`
  dialogTitle.textContent = `photo${currentIndex}.jpg`
  updateCounter()
}

function updateCounter() {
  counter.textContent = `${currentIndex} / ${totalImages}`
}

/* -------------------------------
  Keyboard Navigation
----------------------------------*/
document.addEventListener('keydown', event => {
  if (!dialogWindows.open) return
  if (event.key === 'ArrowRight') showNextImage()
  if (event.key === 'ArrowLeft') showPreviousImage()
})
