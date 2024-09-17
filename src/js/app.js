"use strict";


import * as devFunctions from './modules/functions.js';

//  init Fancybox
if (typeof Fancybox !== "undefined" && Fancybox !== null) {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false,
        closeButton: false
    });
}

document.addEventListener('DOMContentLoaded', () => {

    devFunctions.OS();
    devFunctions.isWebp();


    // event handlers

    document.addEventListener('click', (e) => {

        const target = e.target;

        if (target.closest('.icon-menu') || (target.classList.contains('menu__link') && document.querySelector('.header').classList.contains('open-menu'))) {
            getMenu()
        }

        if (target.closest('.header__video')) {
            let video = target.closest('.header__video');

            if (video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        }

    });

    function getMenu() {
        document.body.classList.toggle('lock');
        document.querySelector('.header').classList.toggle('open-menu');
    }

    //  sliders


    if (document.querySelector('.header__slider')) {
        new Swiper('.header__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                stopOnLastSlide: false,
            },
            breakpoints: {
                575.98: {
                    slidesPerView: 2,
                },
                767.98: {
                    slidesPerView: 3,
                },
                991.98: {
                    slidesPerView: 5,
                }
            }
        });
    }



    if (document.querySelector('.mission__slider')) {
        new Swiper('.mission__slider', {
            slidesPerView: 2,
            initialSlide: 2,
            centeredSlides: true,
            grabCursor: true,
            loop: true,
            spaceBetween: 10,
            breakpoints: {
                767.98: {
                    slidesPerView: 3.5,
                    spaceBetween: 53,
                }
            }
        });


    }



    // convert animation
    const convert = document.querySelector('.annual__convert');

    if (convert) {

        const callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                convert.classList.add('active');
            }
        };

        const convertObserver = new IntersectionObserver(callback);
        convertObserver.observe(convert);
    }




})




