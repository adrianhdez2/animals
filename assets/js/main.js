let open__profile = document.querySelector(".open");
let close__profile = document.querySelector(".close");
let contenedor__menu = document.querySelector(".menu-lateral");
let contenido__menu = document.querySelector(".container-menu-lateral");

const input_contra = document.querySelector(".contrasenia");
const contrasenia = document.querySelector(".mostrar");



open__profile.addEventListener("click", function(e){
    e.preventDefault();
    contenedor__menu.style.opacity = "1";
    contenedor__menu.style.visibility = "visible";
    contenido__menu.classList.add("close-profile");
});

close__profile.addEventListener("click", function(){
    contenido__menu.classList.remove("close-profile");
    setTimeout(function(){
        contenedor__menu.style.opacity = "0";
        contenedor__menu.style.visibility = "hidden";
    },500);
});

contenedor__menu.addEventListener("click", function(){
    contenido__menu.classList.remove("close-profile");
    setTimeout(function(){
        contenedor__menu.style.opacity = "0";
        contenedor__menu.style.visibility = "hidden";
    },500);
});

contrasenia.addEventListener("click", validaCheckbox);

function validaCheckbox(){
    if(this.checked){
        input_contra.type = "text";
    }else{
        input_contra.type = "password";
    }
}
