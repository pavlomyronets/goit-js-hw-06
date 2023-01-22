// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


// const inputEL = document.querySelector("#validation-input");

// inputEL.addEventListener("blur", onInputNumberCheck);

// function onInputNumberCheck(event) {
//     if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
//         inputEL.classList.remove("invalid");
//         inputEL.classList.add("valid");
//     } else {
//         inputEL.classList.add("invalid")
//     }
// }


// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputNumberCheck);

// function onInputNumberCheck(event) {
//     if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//     } else {
//     inputEl.classList.add("invalid");
//     }
// }

const textInput = document.querySelector("#validation-input");
const lengthSymbols = Number(textInput.dataset.length);

textInput.addEventListener("blur", handleBlure);

function handleBlure(event) {
  if (event.target.value.length === lengthSymbols) {
    textInput.classList.replace(`invalid`, `valid`);
  } else {
    textInput.classList.replace(`valid`, `invalid`);
  }
  console.log(event.target.value.length === lengthSymbols);
}