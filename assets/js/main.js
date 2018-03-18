window.addEventListener("load",()=>{
 var menu_button = document.querySelector(".nav-button-wrap").addEventListener("click",show_menu);
});
function show_menu(){
    var mobile_menu = document.querySelector(".vismobmenu");
    mobile_menu.classList.toggle("show1");
}