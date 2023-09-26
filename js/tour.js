window.addEventListener("load", function(){
    this.fetch('data/tour.json')
        .then((res) => res.json())
        .then((result) => parseTour(result))
        .catch((err) => console.log(err));
    let data;
    function parseTour(_data){
        data=_data;
        let tourCate = document.querySelector(".tour .slide-tabs");
        let tabHtml = ``;
        let dataArr = _data.tour;
        for (let i = 0; i < dataArr.length; i++){
            let html = `<li><a href="#">${dataArr[i].catename}</a></li>`
            tabHtml += html;
        }
        tourCate.innerHTML = tabHtml;
        
        let tabs = document.querySelectorAll(".tour .slide-tabs li")
        tabs.forEach(function(item, index){
            item.addEventListener("click", function(event){
                event.preventDefault();
                tourSlide(index);
                tabs.forEach((item)=> item.classList.remove("active"));
                this.classList.add("active");
            })
            tabs[0].classList.add("active");
            tourSlide(0);
        })
    }
    let tourSwiper;

    function tourSlide(_idx){
        let swTourHtml = ``;
        let tourData = data.tour[_idx].list;
        for(let i = 0; i < tourData.length; i++){
            let obj = tourData[i];
            let html = `
                <li class="swiper-slide">
                    <a href="${obj.link}">
                        <div class="imgbox">
                            <img src="${obj.img}" alt="${obj.alt}">
                        </div>
                        <div class="textbox">
                            <span class="point" ${obj.point ? "style='display:block'" : "style='display:none'"}>${obj.point}</span>
                            <p class="promotion" ${obj.promotion ? "style='display:block'" : "style='display:none'"}>${obj.promotion}</p>
                            <p class="title">${obj.title}</p>
                            <p class="price"><b>${obj.price}</b>원~</p>
                        </div>
                    </a>
                </li>
            `
            swTourHtml += html
        }
        let swTourWrap = document.querySelector(".sw-tour .swiper-wrapper");
        swTourWrap.innerHTML = swTourHtml;
        if(tourSwiper){
            tourSwiper.destroy();
        }
        tourSwiper = new Swiper(".sw-tour", {
            spaceBetween: 15,
            slidesPerView: 2.3,
            grid:{
                rows:2,
                fill:'row',
            },
            navigation: {
                nextEl: ".tour .sw-next",
                prevEl: ".tour .sw-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup:2,
                    spaceBetween: 20,
                    grid: {
                        rows: 1,
                    },
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup:3,
                    spaceBetween: 25,
                    grid: {
                        rows: 1,
                    },
                },
            },
        });
    }
    
})