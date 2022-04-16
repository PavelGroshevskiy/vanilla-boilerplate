import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import Counter from '@components/counter/counter';
import Modal from '@components/modal/modal';
import Swiper from 'swiper';

class Slider extends RootComponent<HTMLDivElement> {
    swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    add = document.querySelectorAll('.counter-btn_add');
    sub = document.querySelectorAll('.counter-btn_sub');
    main = document.querySelector('.main-number');
    next = document.querySelector('.swiper-button_next');
    prev = document.querySelector('.swiper-button_prev');

    constructor(props: IRootComponent, counters: Counter[], modal: Modal) {
        super(props);

        this.swiper.on('slideChange', () => {
            counters.forEach((el, i) => {
                if (this.swiper.activeIndex === i) {
                    console.log('equal');
                    this.main.innerHTML = el.currVal.toString();
                }
            });
        });

        this.add.forEach((addBtn) => {
            addBtn.addEventListener('click', () => {
                counters.forEach((el, i) => {
                    if (this.swiper.activeIndex === i) {
                        console.log('equal');
                        this.main.innerHTML = el.currVal.toString();
                    }
                });
            });
        });

        this.sub.forEach((subBtn) => {
            subBtn.addEventListener('click', () => {
                counters.forEach((el, i) => {
                    if (this.swiper.activeIndex === i) {
                        console.log('equal');
                        this.main.innerHTML = el.currVal.toString();
                    }
                });
            });
        });

        this.next.addEventListener('click', () => {
            this.swiper.slideNext();
            counters.forEach((el, i) => {
                if (this.swiper.activeIndex === i) {
                    console.log('equal');
                    this.main.innerHTML = el.currVal.toString();
                }
            });
        });

        this.prev.addEventListener('click', () => {
            this.swiper.slidePrev();
            counters.forEach((el, i) => {
                if (this.swiper.activeIndex === i) {
                    console.log('equal');
                    this.main.innerHTML = el.currVal.toString();
                }
            });
        });
    }
}

export default Slider;
