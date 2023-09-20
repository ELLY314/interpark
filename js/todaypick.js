window.addEventListener("load", function(){
    let data;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data/todaypick.json');
    xhttp.send();
    xhttp.onreadystatechange = function (event) {
        const req = event.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            // console.log(req.response);
            data = JSON.parse(req.response);
            todaypickSlide();
        }
    };
    function todaypickSlide(){
        let swTodaypickHtml = ``;
        for (let i = 0; i < data.todaypick_count; i++) {
          let obj = data[`todaypick_${i + 1}`];
          let html = `
            <li class="swiper-slide">
                <a href="${obj.link}">
                    <img src="img/${obj.img}" alt="${obj.name}" />
                </a>
            </li>
          `;
          swTodaypickHtml += html;
        }
        let swTodaypickWrapper = document.querySelector('.sw-todaypick .swiper-wrapper');
        swTodaypickWrapper.innerHTML = swTodaypickHtml;

        var todaySwiper = new Swiper(".sw-todaypick", {
            slidesPerView: 1,
            spaceBetween: 25,
            loop:true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".todaypick .sw-next",
                prevEl: ".todaypick .sw-prev",
            },
            pagination: {
                el: '.sw-todaypick-pg',
                clickable: true,
            },
            breakpoints: {
                760: {
                  slidesPerView: 2,
                },
            },
        });
    }
    
})