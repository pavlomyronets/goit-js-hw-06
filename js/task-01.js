// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const allCategoriesList = document.querySelectorAll("li.item")
console.log(`Number of categories: ${allCategoriesList.length}`);

console.dir([...allCategoriesList]);
const categoriesList = document.querySelector("#categories");
console.dir(categoriesList);
[...categoriesList.children].forEach((elem)=>{
  console.dir(`Category: ${elem.firstElementChild.textContent}`);
  console.dir(`Elements: ${elem.lastElementChild.children.length}`);
});