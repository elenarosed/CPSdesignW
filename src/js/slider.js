import Swiper from 'swiper';
import {Pagination} from "swiper";



let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
let swiperBrands = undefined;
let swiperRepair = undefined;
let swiperPrices = undefined;
let init = false;

let brandsSection = document.querySelector('.brands-section');
let brandsContainer = brandsSection.querySelector('.brands-container');
let brandsButton = brandsSection.querySelector('.read-more-button-brands');
let textSection = document.querySelector('.text-wrapper');

let repairSection = document.querySelector('.repair-section');
let repairContainer = repairSection.querySelector('.repair-container');
let repairButton = repairSection.querySelector('.read-more-button-repair');
let servicesButton = document.querySelector('.services-readmore-button')

let layoutOnResize = function() {
    if(mobile.matches) {
        if (!init) {
            init = true;

            textSection.classList.remove('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_open');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.add('services-description-info_mobile');

            brandsContainer.classList.add('brands-container_mobile');
            brandsContainer.classList.remove('brands-container_open-tablet');
            brandsContainer.classList.remove('brands-container_open-pc');
            brandsContainer.classList.remove('brands-container_closed');

            repairContainer.classList.add('repair-container_mobile');
            repairContainer.classList.remove('repair-container_open-tablet');
            repairContainer.classList.remove('repair-container_open-pc');
            repairContainer.classList.remove('repair-container_closed');

            /* create swipers */
            swiperBrands = new Swiper('.swiper-brands', {
                direction: 'horizontal',
                loop: false,
                pagination: {
                    el: '.swiper-pagination-brands',
                    clickable: true,
                },
                slidesPerView: 'auto',
                modules: [Pagination],
            });
            swiperRepair = new Swiper('.swiper-repair', {
                direction: 'horizontal',
                loop: false,
                pagination: {
                    el: '.swiper-pagination-repair',
                    clickable: true,
                },
                slidesPerView: 'auto',
              modules: [Pagination],
            });
            swiperPrices = new Swiper('.swiper-prices', {
                direction: 'horizontal',
                loop: false,
                pagination: {
                    el: '.swiper-pagination-prices',
                    clickable: true,
                },
                slidesPerView: 'auto',
              modules: [Pagination],
            });
        }
    }
    else {
        textSection.classList.remove('services-description-info_open-pc');
        textSection.classList.remove('services-description-info_open');
        textSection.classList.add('services-description-info_desktop');
        textSection.classList.remove('services-description-info_mobile');

        brandsContainer.classList.remove('brands-container_mobile');
        brandsContainer.classList.add('brands-container_closed');

        repairContainer.classList.remove('repair-container_mobile');
        repairContainer.classList.add('repair-container_closed');

        if (swiperBrands !== undefined) {
            swiperBrands.destroy(true, true);
        }
        if (swiperRepair !== undefined) {
            swiperRepair.destroy(true, true);
        }

        init = false;

        /* if read more is active - change height depending on current width */
        if (window.innerWidth >= 1440 && servicesButton.classList.contains('readmore_opened')) {
            textSection.classList.remove('services-description-info_open');
            textSection.classList.add('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.remove('services-description-info_mobile');
        }
        else if (window.innerWidth >= 768 && servicesButton.classList.contains('readmore_opened')) {
            textSection.classList.add('services-description-info_open');
            textSection.classList.remove('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.remove('services-description-info_mobile');
        }

        if (window.innerWidth >= 1440 && brandsButton.classList.contains('read-more-button_opened') ) {
            brandsContainer.classList.remove('brands-container_closed');
            brandsContainer.classList.remove('brands-container_open-tablet');
            brandsContainer.classList.add('brands-container_open-pc');

        }
        else if (window.innerWidth >= 768 && brandsButton.classList.contains('read-more-button_opened')) {
            brandsContainer.classList.remove('brands-container_closed');
            brandsContainer.classList.remove('brands-container_open-pc');
            brandsContainer.classList.add('brands-container_open-tablet');
        }

        if (window.innerWidth >= 1440 && repairButton.classList.contains('read-more-button_opened') ) {
            repairContainer.classList.remove('repair-container_closed');
            repairContainer.classList.remove('repair-container_open-tablet');
            repairContainer.classList.add('repair-container_open-pc');
        }
        else if (window.innerWidth >= 768 && repairButton.classList.contains('read-more-button_opened')) {
            repairContainer.classList.remove('repair-container_closed');
            repairContainer.classList.remove('repair-container_open-pc');
            repairContainer.classList.add('repair-container_open-tablet');
        }
    }
}

window.addEventListener("load", layoutOnResize);
window.addEventListener("resize", layoutOnResize);

let showMoreBrands = function(){
    let brandsButtonStyles = brandsSection.querySelector('.brands-section__button');
    let isCollapsed = brandsButton.classList.contains('read-more-button_closed');
    brandsContainer.classList.remove('brands-container_mobile');

    if(isCollapsed){
        if (window.innerWidth >= 1440) {
            brandsContainer.classList.remove('brands-container_closed');
            brandsContainer.classList.remove('brands-container_open-tablet');
            brandsContainer.classList.add('brands-container_open-pc');
        }
        else {
            brandsContainer.classList.remove('brands-container_closed');
            brandsContainer.classList.remove('brands-container_open-pc');
            brandsContainer.classList.add('brands-container_open-tablet');
        }

        brandsContainer.style.transition = '0.7s ease';
        brandsButton.textContent = 'Скрыть';
        brandsButtonStyles.style.margin = '22px 0 14px 57px';
        brandsButton.classList.remove('read-more-button_closed');
        brandsButton.classList.add('read-more-button_opened');
    }
    else if(!isCollapsed) {
        brandsContainer.classList.remove('brands-container_open-tablet');
        brandsContainer.classList.remove('brands-container_open-pc');
        brandsContainer.classList.add('brands-container_closed');

        brandsButton.textContent = 'Показать все';
        brandsButtonStyles.style.margin = '8px 0 34px 57px';
        brandsButton.classList.remove('read-more-button_opened');
        brandsButton.classList.add('read-more-button_closed');
    }
}

let showMoreRepair = function(){
    let repairButtonStyles = repairSection.querySelector('.repair-section__button');
    let isCollapsed = repairButton.classList.contains('read-more-button_closed');
    repairContainer.classList.remove('repair-container_mobile');

    if(isCollapsed){
        if (window.innerWidth >= 1440) {
            repairContainer.classList.remove('repair-container_closed');
            repairContainer.classList.remove('repair-container_open-tablet');
            repairContainer.classList.add('repair-container_open-pc');
        }
        else {
            repairContainer.classList.remove('repair-container_closed');
            repairContainer.classList.remove('repair-container_open-pc');
            repairContainer.classList.add('repair-container_open-tablet');
        }

        repairContainer.style.transition = '0.7s ease';
        repairButton.textContent = 'Скрыть';
        repairButtonStyles.style.margin = '22px 0 14px 57px';
        repairButton.classList.remove('read-more-button_closed');
        repairButton.classList.add('read-more-button_opened');
    }
    else if(!isCollapsed) {
        repairContainer.classList.remove('repair-container_open-tablet');
        repairContainer.classList.remove('repair-container_open-pc');
        repairContainer.classList.add('repair-container_closed');

        repairButton.textContent = 'Показать все';
        repairButtonStyles.style.margin = '8px 0 34px 57px';
        repairButton.classList.remove('read-more-button_opened');
        repairButton.classList.add('read-more-button_closed');
    }
}

let resizeText = function(){
    servicesButton.classList.toggle('readmore_opened');
    servicesButton.classList.toggle('services-description__button_closed');
    textSection.style.transition = '0.7s ease';
    if (servicesButton.classList.contains('readmore_opened')) {
        servicesButton.textContent = 'Скрыть';
        if (window.innerWidth >= 1440) {
            textSection.classList.add('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_open');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.remove('services-description-info_mobile');
        }
        else {
            textSection.classList.remove('services-description-info_open-pc');
            textSection.classList.add('services-description-info_open');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.remove('services-description-info_mobile');
        }
    }
    else {
        servicesButton.textContent = 'Читать далее';
        if (window.innerWidth < 768) {
            textSection.classList.remove('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_open');
            textSection.classList.remove('services-description-info_desktop');
            textSection.classList.add('services-description-info_mobile');
        }
        if (window.innerWidth >= 768) {
            textSection.classList.remove('services-description-info_open-pc');
            textSection.classList.remove('services-description-info_open');
            textSection.classList.add('services-description-info_desktop');
            textSection.classList.remove('services-description-info_mobile');
        }
    }

}


servicesButton.addEventListener('click', resizeText);
brandsButton.addEventListener('click', showMoreBrands);
repairButton. addEventListener('click', showMoreRepair);
