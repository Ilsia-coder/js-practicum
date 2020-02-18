"use strict" ;
const startButton = document.querySelector('.start-button'),
          firstScreen = document.querySelector('.first-screen'),
          mainForm = document.querySelector('.main-form'),
          endButton = document.querySelector('.end-button'),
          formCalculate = document.querySelector('.form-calculate'),
          total = document.querySelector('.total'),
          fastRange = document.querySelector('.fast-range');


function showElement(elem) {
  elem.style.display = 'block';
}

function hideElement(elem) {
  elem.style.display = 'none';
}
function handlerCallBackForm(e) {
  const target = e.target;
  
  if (target.classList.contains('want-faster')) {
      // if (target.checked) {
      //   showElement(fastRange);
      // } else {
      //   hideElement(fastRange);
      // }
    target.checked ? showElement(fastRange) : hideElement(fastRange);
  }
}



startButton.addEventListener('click', function() {
  hideElement(firstScreen);
  showElement(mainForm);
});

endButton.addEventListener('click', function () {
  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
      hideElement(elem);
    }
  }

  showElement(total);
});

formCalculate.addEventListener('change', handlerCallBackForm);