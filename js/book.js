window.addEventListener("load", function(){
    let bookData;
    const bookXttp = new XMLHttpRequest();
    bookXttp.open("GET", "data/book.json");
    bookXttp.send();
    bookXttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            bookData = JSON.parse(req.response);
            parseBook(bookData);
        }
    };

    function parseBook(_data){
        let bookCate = document.querySelector(".book .slide-tabs");
        bookData = _data;
        let tabHtml = ``;
        let dataArr = _data.book;
        for(let i = 0; i < dataArr.length; i++){
            let html = `<li><a href="#">${dataArr[i].catename}</a></li>`;
            tabHtml += html;
        }
        bookCate.innerHTML = tabHtml;

        let tabs = document.querySelectorAll(".book .slide-tabs li");
        for(let i = 0; i < dataArr.length; i++){
            tabs[0].classList.add("active");

            tabs[i].addEventListener("click",function(event){
                event.preventDefault();
                bookSlide(i)
                for(let j = 0; j<tabs.length; j++){
                    tabs[j].classList.remove("active");
                }
                this.classList.add("active")
            })
        }
        bookSlide(0)
    }
    let bookSwiper;
    function bookSlide(_idx){
        let swBookHtml = ``;
        let listData = bookData.book[_idx].list;
        for(let i = 0; i < listData.length; i++){
            let obj = listData[i];
            let html = `
                <li class="swiper-slide">
                    <a href="javascript:;">
                        <div class="imgbox">
                            <img src="img/${obj.img}" alt="">
                        </div>
                        <div class="txtbox">
                            <p class="title">${obj.title}</p>
                            <p class="price"><span>${obj.price}</span>원</p>
                        </div>
                    </a>
                </li>
            `;
            swBookHtml += html;
        }
        let swBookWrapper = document.querySelector(".sw-book .swiper-wrapper");
        swBookWrapper.innerHTML = swBookHtml;

        if(bookSwiper){
            bookSwiper.destroy();
        }
        bookSwiper = new Swiper(".sw-book", {
            navigation: {
                nextEl: ".book .sw-next",
                prevEl: ".book .sw-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 25,
                    grid: {
                        rows: 1,
                    },
                },
            },
        })
    }
})