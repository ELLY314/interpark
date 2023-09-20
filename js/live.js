window.addEventListener("load", function(){
    let liveData;
    let liveXttp = new XMLHttpRequest();
    liveXttp.open("GET", "data/live.json");
    liveXttp.send();
    liveXttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            liveData = JSON.parse(req.response)
            liveSlide()
        }
    }
    function liveSlide(){
        let swLiveHtml = ``;
        for(i = 0; i < liveData.live_count; i++){
            let obj = liveData[`live_${i + 1}`];
            let html = `
                <li class="swiper-slide">
                    <a href="${obj.link}">
                        <div class="imgbox">
                            <img src="img/${obj.img}" alt="${obj.alt}">
                        </div>
                        <div class="live-text">
                            <div class="top-text">
                                <span>${obj.cate}</span>
                                <p>${obj.title}</p>
                            </div>
                            <div class="time-text">
                                <h2>${obj.date}</h2>
                                <p>${obj.time}</p>
                            </div>
                            <div class="item-info">
                                <div class="item-img" ${obj.thumbImg ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/${obj.thumbImg}" alt="${obj.thumbAlt}">
                                </div>
                                <div class="item-txt" ${obj.thumbTitle ? "style='display:block'" : "style='display:none'"}>
                                    <p>${obj.thumbTitle}</p>
                                    <div class="item-price" ${obj.thumbPrice ? "style='display:block'" : "style='display:none'"}>
                                        <span class="red">${obj.thumbRatio}%</span>
                                        <span>${obj.thumbPrice}</span>원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            `;
            swLiveHtml += html;
        }
        let swLiveWrapper = document.querySelector(".sw-live .swiper-wrapper")
        swLiveWrapper.innerHTML = swLiveHtml;

        let liveSwiper = new Swiper(".sw-live", {
            navigation: {
                nextEl: ".live .sw-next",
                prevEl: ".live .sw-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2.3,
                    slidesPerGroup:2,
                    spaceBetween: 15,
                    grid: {
                        rows: 1,
                    },
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 25,
                },
            },
        });
    }
    
})