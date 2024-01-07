// cookies block close
const coockiesSection=document.getElementById('cookies')
const cookiesCloseButton=document.getElementById('cookiesCheckbox')
cookiesCloseButton.addEventListener('click',addCloseClass)

function addCloseClass() {
  coockiesSection.classList.add("close")
  return
}

// Innen folytasd! A header scroll-t kell megcsinálni. 