let botonHamburguesa = document.getElementById("botonHamburguesa");
let menu = document.querySelector(".menuDesplegable");
let fondo = document.querySelector(".fondo");
fondo.addEventListener("click", cerrarMenu);
botonHamburguesa.addEventListener("click", desplegarMenu);
function desplegarMenu() {
    menu.style.setProperty("display", "flex");
    fondo.style.setProperty("display", "flex");
    window.setTimeout(function() {
        menu.style.right = 0;
    }, 100);
}
function cerrarMenu() {
    window.setTimeout(function() {
        menu.style.setProperty("display", "none");
    }, 100);
    fondo.style.setProperty("display", "none");
    menu.style.right = "-70%";
}

//# sourceMappingURL=contacto1.bda4afae.js.map
