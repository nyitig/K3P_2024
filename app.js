// cookies block close
const coockiesSection=document.getElementById('cookies')
const cookiesCloseButton=document.getElementById('cookiesCheckbox')
cookiesCloseButton.addEventListener('click',addCloseClass)

function addCloseClass() {
  coockiesSection.classList.add("close")
  return
}

// rem height 
let deviceFontSize=parseFloat(getComputedStyle(document.documentElement).fontSize)

// detect window scroll
window.onscroll= function (e) {
  let ycoord=mainSectYCoordcheck()
  const header=document.getElementById('header')
  if(ycoord<20) {
    if (header.classList.contains('scrolled')) {
      header.classList.remove('scrolled')
    }
    return
  }
  if (ycoord=>20) {
    header.classList.add('scrolled')
  }
  
}


// main x coord check
function mainSectYCoordcheck() {
  const main=document.getElementById('main')
let mainInfo=main.getBoundingClientRect()
let mainYcoord=mainInfo.y
return mainYcoord*-1
}

