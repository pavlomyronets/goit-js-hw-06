function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  createButton: document.querySelector("[data-create]"),
  markupContainer: document.querySelector("#boxes"),
};
refs.createButton.addEventListener("click", onCreateButtonClick)
function onCreateButtonClick() {
  createBoxes(10);
}

function createBoxes(amount) {
  let sizes = 30
  const elements = [];
  for (let index = 0; index < amount; index+=1) {
    const div = document.createElement("div")
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    div.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    elements.push(div)
  }
  refs.markupContainer.append(...elements);
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.