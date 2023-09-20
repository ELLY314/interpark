window.onload = function(){
    let body = document.querySelector("body");
    let modal = document.querySelector(".modal");
    let btnModalClose = document.querySelector(".close-btn");
    btnModalClose.onclick = function(){
        body.classList.remove("modal-active");
        modal.style.display = "none";
    }

}