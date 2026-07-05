const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const boton = document.getElementById("boton");

sobre.addEventListener("click", () => {
    sobre.style.display = "none";
    carta.style.display = "block";
});

boton.addEventListener("click", () => {
    alert("💖 Te amo muto, amor. ❤️");
});
