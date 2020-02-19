"use strict" ;
сonst DATA = {
  whichSite: ['landing', 'multiPage', 'onlineStore'],
  price: [4000, 8000, 26000],
  desktopTemplates: [50, 40, 30],
  adapt: 20,
  mobileTemplates: 15,
  editable: 10,
  metrikaYandex: [500, 1000, 2000],
  analyticsGoogle: [850, 1350, 3000],
  sendOrder: 500,
  deadlineDay:
  deadline
};



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