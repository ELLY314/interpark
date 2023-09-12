window.addEventListener("load", function(){
    let ticketTabs = document.querySelectorAll(".ticket .slide-tabs li");
    let ticketCont = document.querySelectorAll(".ticket .slide-wrap");
    ticketTabs.forEach(function(item, index){
        item.addEventListener("click", function(event){
            event.preventDefault();
            ticketTabs.forEach((item)=> item.classList.remove("active"));
            ticketCont.forEach((item)=> item.classList.remove("active"));
            this.classList.add("active");
            ticketCont[index].classList.add("active");
        })
        ticketTabs[0].classList.add("active");
        ticketCont[0].classList.add("active");
    })
    
    let ticketSwiper;
        ticketSwiper = new Swiper(".sw-ticket", {
        spaceBetween: 10,
        slidesPerView: 3.5,
        navigation: {
            nextEl: ".ticket .sw-next",
            prevEl: ".ticket .sw-prev",
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesPerGroup:3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup:4,
                spaceBetween: 30,
            },
        },
    });
    
    
})