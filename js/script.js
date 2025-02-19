menu = document .getElementById("menu");
mobile = document.getElementById("mobile");
overlay = document.getElementById("overlay");

menu.addEventListner("click", () => {
    if (mobile.style.display == "none"){
        mobile.style.display = "block"
        overlay.style.display = "block"
    }else {
        mobile.style.display = "none"
        overlay.style.sisplay = "none"
    }
}) 
overlay.addEventListner("click", () => {
    mobile.style.display = "none"
    overlay.style.display = "none"
})   
