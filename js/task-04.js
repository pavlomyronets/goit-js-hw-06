// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
//  і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та
// ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

// let a = 5;// створюю змінну а і ініціалізую її зі значенням 5
// a = 10; // присвоюю змінній а нове значення 10

let counterValue = 0;

const counter = document.getElementById("counter");
const value = document.getElementById("value");

counter.addEventListener("click", handleButtonsClick);

function handleButtonsClick({ target }) {
  const buttonAction = target.dataset.action;
  if (buttonAction === "decrement") counterValue -= 1;
  else if (buttonAction === "increment") counterValue += 1;
  value.textContent = counterValue;
}

// const userAge = Number(prompt("Enter your age:"))

// if (userAge < 18) alert("You are not allowed to use this site!")
// else if (userAge >= 18 && userAge <= 40) alert("Welcome!")
// else alert("You are too old for this site!")
