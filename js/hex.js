const hexadecimalNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let colorName = document.querySelector("section div h1")
let section = document.querySelector("section")
let btn = document.querySelector("section div button")
let static = colorName.innerHTML
let changeColor = function () {
    colorName.innerHTML = static;
    let color = `#${hexadecimalNumbers[Math.floor(Math.random() * 16)]}${hexadecimalNumbers[Math.floor(Math.random() * 16)]}${hexadecimalNumbers[Math.floor(Math.random() * 16)]}${hexadecimalNumbers[Math.floor(Math.random() * 16)]}${hexadecimalNumbers[Math.floor(Math.random() * 16)]}${hexadecimalNumbers[Math.floor(Math.random() * 16)]}`
    colorName.innerHTML += `<span style="color: ${color};">${color}</span>`;
    section.style.backgroundColor = `${color}`
}
btn.addEventListener("click", changeColor)