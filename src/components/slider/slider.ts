import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import Swiper from 'swiper';
// import SwiperStyle from 'swiper/scss';

class Slider extends RootComponent<HTMLDivElement> {

    constructor(props: IRootComponent) {
        super(props);

				const next = document.querySelector('.swiper-button_next');
				const prev = document.querySelector('.swiper-button_prev');

			// console.log(this);
			// 	const swiper = new Swiper(this.node.querySelector<HTMLElement>('swiper'), {
  		// 			loop: true,
						
			// 		// If we need pagination
			// 		pagination: {
			// 			el: '.swiper-pagination',
			// 		},

			// 		// Navigation arrows
			// 		navigation: {
			// 			nextEl: '.swiper-button-next',
			// 			prevEl: '.swiper-button-prev',
			// 		},

			// 		// And if we need scrollbar
			// 		scrollbar: {
			// 			el: '.swiper-scrollbar',
			// 		},
			// 	});

			const swiper = new Swiper(".mySwiper", {
				loop: true,
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
			const activeIndex = swiper.realIndex;
			// console.log(activeIndex);

			next.addEventListener('click', ()=>{
				swiper.slideNext();
			});
			
			prev.addEventListener('click', ()=>{
				swiper.slidePrev();
			});
			
    }
}

export default Slider;
