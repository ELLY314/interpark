window.addEventListener("load", function(){
    this.fetch('data/shopping.json')
        .then((res) => res.json())
        .then((result) => parseShopping(result))
        .catch((err) => console.log(err));
    let data;

    function parseShopping(_data){
        let shoppingCate = document.querySelector(".shopping .slide-tabs");
        data = _data;
        let tabHtml = ``;
        let dataArr = _data.shopping;
        for (let i = 0; i < dataArr.length; i++){
            let html = `<li><a href="#">${dataArr[i].catename}</a></li>`
            tabHtml += html;
        }
        shoppingCate.innerHTML = tabHtml;

        let tabs = document.querySelectorAll(".shopping .slide-tabs li")
        tabs.forEach(function(item, index){
            item.addEventListener("click", function(){
                shoppingSlide(index);
                tabs.forEach((item)=> item.classList.remove("active"));
                this.classList.add("active");
            })
            tabs[0].classList.add("active");
            shoppingSlide(0);
        })

    }

    let shoppingSwiper;

    function shoppingSlide(_idx){
        let swShoppingHtml = ``;
        let shoppingData = data.shopping[_idx].list;
        for(let i = 0; i < shoppingData.length; i++){
            let obj = shoppingData[i];
            let html = `
                <li class="swiper-slide">
                    <a href="${obj.link}">
                        <div class="imgbox">
                            <img src="${obj.img}" alt="${obj.alt}">
                        </div>
                        <div class="textbox">
                            <h2><span>${obj.ratio}</span>${obj.price}원</h2>
                            <p>${obj.name}</p>
                        </div>
                    </a>
                </li>
            `
            swShoppingHtml += html;
        }
        swShoppingWrap = document.querySelector(".sw-shopping .swiper-wrapper");
        swShoppingWrap.innerHTML = swShoppingHtml;
        if(shoppingSwiper){
            shoppingSwiper.destroy();
        }
        shoppingSwiper = new Swiper(".sw-shopping", {
            // spaceBetween: 10,
            // slidesPerView: 5,
            // grid:{
            //     rows:2,
            //     fill:'row',
            // },
            navigation: {
                nextEl: ".shopping .sw-next",
                prevEl: ".shopping .sw-prev",
            },
            breakpoints: {
                760: {
                    slidesPerView: 3,
                    slidesPerGroup:3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup:4,
                },
            },
        });


    }

    // let data;
    // const xhttp = new XMLHttpRequest();
    // xhttp.open('GET', 'data/shopping.json');
    // xhttp.send();
    // xhttp.onreadystatechange = function (event) {
    //     const req = event.target;
    //     if (req.readyState === XMLHttpRequest.DONE) {
    //         data = JSON.parse(req.response);
    //         shoppingSlide();
    //     }
    // };
    // function shoppingSlide(_idx){
    //     let swShoppingHtml = ``;
    //     let listData = data.shopping[_idx].list;
    //     for(let i = 0; i < listData.length; i++){
    //         let obj = listData[i];
    //         let html = `
    //             <li class="swiper-slide">
    //                 <a href="${obj.link}">
    //                     <div class="imgbox">
    //                         <img src="${obj.img}" alt="${obj.alt}">
    //                     </div>
    //                     <div class="textbox">
    //                         <h2><span>${obj.ratio}</span>${obj.price}원</h2>
    //                         <p>${obj.name}</p>
    //                     </div>
    //                 </a>
    //             </li>
    //         `;
    //         swShoppingHtml+=html;
    //     }
    //     let swShoppingWrap = document.querySelector(".sw-shopping .swiper-wrapper");
    //     swShoppingWrap.innerHTML = swShoppingHtml;

    //     var swiper = new Swiper(".sw-shopping", {
    //         spaceBetween: 25,
    //         navigation: {
    //             nextEl: ".shopping .sw-next",
    //             prevEl: ".shopping .sw-prev",
    //         },
    //         breakpoints: {
    //             760: {
    //               slidesPerView: 3,
    //               slidesPerGroup:3,
    //             },
    //             1024: {
    //               slidesPerView: 4,
    //               slidesPerGroup:4,
    //             },
    //         },
    //     });
    // }

    
})