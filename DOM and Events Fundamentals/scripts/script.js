/*@@@@@@@@@ DOM and Events Fundamentals @@@@@@@@@*/
'use strict';

/************** Whats the DOM and DOM manipulation **************/
// const arr = [1, 2, 3, 4, 5];
// for (let i in arr) console.log(arr[i]);
const btnsShowModel = document.querySelectorAll('.show-model');
const model = document.querySelector('.model');
const btnCloseModel = document.querySelector('.close-model');
const overlay = document.querySelector('.overlay');

// console.log(btnCloseModel, btnsShowModel, model, overlay);

const openModel = function () {
  // console.log('Button Clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModel.length; i++)
  btnsShowModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
// overlay.addEventListener('click', function () {
//      model.classList.add('hidden');
//      overlay.classList.add('hidden');
// });

/************** Keyboard events **************/
// keyboard events are global
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
  console.log(e);
});
