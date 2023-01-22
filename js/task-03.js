const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
console.log(gallery);

// 'a' + 'b' = 'ab'
/*
  1. Створить цикл перебору масиву
  2. Створити строку до якої ми будемо додавати нашу розмітку з елементами списку
  3. Створить розмітку для li
  4. Додати розмітку для лі у нашу строку
  5. Додать строку з усією розміткою до ul


*/

// const obj = {
//   username: "vova12345",
//   isAdmin: false,
// };

// const {username} = obj // const username = obj.username

// console.log(username);

// const finalString = images.reduce(
//   (acc, { url, alt }) =>
//     acc + `<li><img src=${url} alt=${alt} class='img'></li>`,
//   ""
// );

let finalString = "";

for (const { url, alt } of images) {
  const liEl = `<li><img src=${url} alt=${alt} class='img'></li>`;
  finalString += liEl; //finalString = finalString + liEl
}

gallery.insertAdjacentHTML("beforeend", finalString);

// console.log(finalString);

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML(position, string(valid HTML)).

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
