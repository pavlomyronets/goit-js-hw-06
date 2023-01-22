// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по 
// кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body")
// console.log(bodyColor);
const createChangeColorButton = document.querySelector(".widget>button")
// console.log(createChangeColorButton);
const valueColor = document.querySelector("span.color")
// console.log(valueColor);

createChangeColorButton.addEventListener("click", onChangeColorButtonClick);
function onChangeColorButtonClick() {
  const changeColor = getRandomHexColor();
  // console.log(changingColor);
  bodyColor.style.backgroundColor = changeColor;
  valueColor.textContent = changeColor;
}