let elemento = document.getElementById("boton");

elemento.addEventListener("click", "dayNight");

function dayNight() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}

// const claseBody = document.body.className;
// if (claseBody == "light") {
//     elemento.textContent = "Night";
// } else {
//     elemento.textContent = "Day";
// }