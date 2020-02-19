"use strict" ;

const DATA = {
  whichSite: ['landing', 'multiPage', 'onlineStore'],
  price: [4000, 8000, 26000],
  desktopTemplates: [50, 40, 30],
  adapt: 20,
  mobileTemplates: 15,
  editable: 10,
  metrikaYandex: [500, 1000, 2000],
  analyticsGoogle: [850, 1350, 3000],
  sendOrder: 500,
  deadlineDay: [[2, 7], [3, 10], [7, 14]],
  deadlinePercent: [20, 17, 15]
};



const startButton = document.querySelector('.start-button'),
          firstScreen = document.querySelector('.first-screen'),
          mainForm = document.querySelector('.main-form'),
          endButton = document.querySelector('.end-button'),
          formCalculate = document.querySelector('.form-calculate'),
          total = document.querySelector('.total'),
          fastRange = document.querySelector('.fast-range'),
          totalPriceSum = document.querySelector('.total_price__sum');


function showElement(elem) {
  elem.style.display = 'block';
}

function hideElement(elem) {
  elem.style.display = 'none';
}

function priceCalculation(elem) {
  let result = 0,
        index = 0;


  if (elem.name === 'whichSite') {
    for (const item of formCalculate.elements) {
      if (item.type === 'checkbox') {
        item.checked = false;
      }
    }
    hideElement(fastRange);
  }

  for (const item of formCalculate.elements) {
    if (item.name === 'whichSite' && item.checked) {
      console.log(item);
    }
  }

  totalPriceSum.textContent = result;
}


function handlerCallBackForm(e) {
  const target = e.target;
  
  if (target.classList.contains('want-faster')) {
    target.checked ? showElement(fastRange) : hideElement(fastRange);
  }
  if (target.classList.contains('calc-handler')) {
    priceCalculation(target);
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