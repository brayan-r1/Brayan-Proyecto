const menu = document.querySelector(".burger");
const nave = document.querySelector(".nave");
document.addEventListener("DOMContentLoaded",()=>{
  even();
});

const even = ()=>{
    menu.addEventListener("click",abriMenu);
}

const abriMenu = ()=> nave.classList.remove("ocultar")

const cerra = () =>{
    const cerre = document.createElement("p");
   cerra.textContent = "x" ;
   cerra.classList.add("cerar");
   nave.appendChild(cerra);
}
