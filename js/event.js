window.addEventListener("load", function(){
    let eventData;
    const eventXhttp = new XMLHttpRequest();
    eventXhttp.open("GET", "data/event.json");
    eventXhttp.send();
    eventXhttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            eventData = JSON.parse(req.response);
            eventSlide();
        }
    }
    function eventSlide(){
        let eventHtml = ``;
        for(let i = 0; i < eventData.event_count; i++){
            let obj = eventData[`evnet_${i + 1}`];
            let html = `
                <li class="swiper-slide">
                    <a href="${obj.link}">
                        <div class="imgbox">
                            <img src="img/${obj.pic}" alt="${obj.naeme}" />
                        </div>
                    </a>
                </li>
            `
            eventHtml += html;
        }
        let eventWrapper = document.querySelector(".sw-event .swiper-wrapper");
        eventWrapper.innerHTML = eventHtml;

        var eventSwiper = new Swiper(".sw-event", {
            slidesPerView: 2.5,
            spaceBetween: 15,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".event .sw-next",
                prevEl: ".event .sw-prev",
            },
            breakpoints: {
                760: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 25,
                },
            },
        })




    }
    
})