// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у
// спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>




const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", handleInput);

function handleInput({ target: { value } }) {
  // let value = event.target.value
  value = value.trim();
  output.textContent = value === "" ? "Anonymous" : value;
}

/*
    if(a === 5) console.log("OK");
    else console.log("NOT OK")

    a === 5 ? console.log("OK") : console.log("NOT OK")

*/

/*
"        aaa     " -> "aaa" | .trim()

*/
