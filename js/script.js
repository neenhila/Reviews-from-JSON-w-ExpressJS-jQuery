import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,

});

$.getJSON("./data/reviews.json").done(async data => {
    for (const [key, value] of Object.entries(data)) {
        let queue = key.charAt(key.length - 1);
        $(`#s${queue}name`).text(value.name)
        let star = value.stars.toString().split(".");
        if (star[1] == "0" || !star[1]) {
            let htmlText = "";
            for (let j = 0; j < star[0]; j++) {
                htmlText += `<i class="fa-solid fa-star"></i>`;
            }
            let emptyStar = 5 - Math.floor(star[0]);
            if (emptyStar !== 0) {
                for (let k = 0; k < emptyStar; k++) {
                    htmlText += `<i class="fa-regular fa-star"></i>`;
                }
            }
            $(`#s${queue}stars`).html(htmlText)
        } else {
            let htmlText = "";
            for (let j = 0; j < star[0]; j++) {
                htmlText += `<i class="fa-solid fa-star"></i>`;
            }
            htmlText += `<i class="fa-solid fa-star-half-stroke"></i>`;
            let emptyStar = 5 - Math.floor(star[0]);
            if (emptyStar > 1) {
                for (let k = 0; k < emptyStar - 1; k++) {
                    htmlText += `<i class="fa-regular fa-star"></i>`;
                }
                $(`#s${queue}stars`).html(htmlText)
            } else if (emptyStar == 1) (
                $(`#s${queue}stars`).html(htmlText)
            )
        }
        $(`#s${queue}content`).text(value.review)
        $(`#s${queue}job`).text(value.job)
    }
})
