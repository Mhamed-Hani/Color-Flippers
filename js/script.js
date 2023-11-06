const colors = [
    "#FF5733", // اللون 1
    "#33FF57", // اللون 2
    "#5733FF", // اللون 3
    "#FF33A3", // اللون 4
    "#33A3FF", // اللون 5
    "#A3FF33", // اللون 6
    "#FF3333", // اللون 7
    "#FF33FF", // اللون 8
    "#33FFA3", // اللون 9
    "#A333FF", // اللون 10
    "#A3FF33", // اللون 11
    "#33A3FF"  // اللون 12
  ];

let colorName = document.querySelector("section div h1")
let section = document.querySelector("section")
let btn = document.querySelector("section div button")
let static = colorName.innerHTML;
let changeColor = function () {
    colorName.innerHTML = static;
    let color = colors[Math.floor(Math.random() * colors.length)]
    colorName.innerHTML += `<span style="color: ${color};">${color}</span>`;
    section.style.backgroundColor = `${color}`
}
btn.addEventListener("click", changeColor)