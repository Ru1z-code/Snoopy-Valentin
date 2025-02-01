document.getElementById("startButton").addEventListener("click", function () {
    document.querySelector(".container").classList.add("hidden");
    document.querySelector(".presentation").classList.remove("hidden");
});

document.getElementById("yesButton").addEventListener("click", function () {
    alert("¡Sabía que dirías que sí! 💖😍");
});

document.getElementById("noButton").addEventListener("click", function () {
    alert("¡Eso no es una opción! 🙈💗");
});
