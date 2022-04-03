import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import Counter from '@components/counter/counter';
import Modal from '@components/modal/modal';
import Swiper from 'swiper';

class Slider extends RootComponent<HTMLDivElement> {

  swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        add = document.querySelectorAll('.counter-btn_add');
        sub = document.querySelectorAll('.counter-btn_sub');
        main = document.querySelector('.main-number');
        next = document.querySelector('.swiper-button_next');
				prev = document.querySelector('.swiper-button_prev');
	// counters: Counter[];
    constructor(props: IRootComponent, counters: Counter[], modal: Modal) {
        super(props);
				// console.log('Slider');
            this.add.forEach(addBtn => {
              addBtn.addEventListener('click', () => {
                counters.forEach((el,i) => {
                  if (this.swiper.activeIndex === i) {
                  console.log('equal');
                  this.main.innerHTML = el.currVal;
            };
            // console.log(el.currVal);
          });
              });
            });

            this.sub.forEach(subBtn => {
              subBtn.addEventListener('click', () => {
                counters.forEach((el,i) => {
                  if (this.swiper.activeIndex === i) {
                  console.log('equal');
                  this.main.innerHTML = el.currVal;
            };
            // console.log(el.currVal);
          });
              });
            });

				
        this.next.addEventListener('click', () => {
          // this.active();
          this.swiper.slideNext();
          counters.forEach((el,i) => {
                  if (this.swiper.activeIndex === i) {
                  console.log('equal');
                  this.main.innerHTML = el.currVal;
            };
          });
        });
        // });
        
        this.prev.addEventListener('click', () => {
          this.swiper.slidePrev();
          counters.forEach((el,i) => {
                  if (this.swiper.activeIndex === i) {
                  console.log('equal');
                  this.main.innerHTML = el.currVal;
            };
          });
        });
    }
};

export default Slider;
