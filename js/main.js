// Import vendor jQuery plugin example (not module)
// import $ from '~/app/libs/jquery/jquery.min.js';
// import $ from 'jquery'
// window.jQuery = $;
// window.$ = $;
// console.log($)

// import Swiper, { Navigation, Mousewheel } from 'swiper';
// Swiper.use([Navigation, Mousewheel]);

//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
const axios = require('axios').default;
require ('~/app/libs-vanilla/service-functions/ibg-class.js');

//- remove-class--------------------------
// import {removeClass} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- siblings--------------------------
import {siblings} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeIn--------------------------
// import {fadeIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- isMobile--------------------------
// import {isMobile} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- scrollDisable(надежное отключение скролла на ios--------------------------
// import scrollDisabler from '~/app/libs-vanilla/service-functions/scrollDisable.js'

//- scrollWidth(фикс прыгания стр-цы. при открытии модалки--------------------------
// require ('~/app/libs-vanilla/service-functions/scrollWidth.js');

//- scroll-to-sects--------------------------
import {ScrollToSects} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- All in one file--------------------------
// require('~/app/libs-vanilla/service-functions/all-functions.js')


//- WITH JQUERY===================================

//- jquery-UI--------------------------Не проверено!
// require('~/app/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// const dlmenu = require('~/app/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// const magnificPopup = require('~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('~/app/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('~/app/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('~/app/libs/superfish/dist/js/hoverIntent.js')
// require('~/app/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
require('~/app/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('~/app/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('~/app/libs-vanilla/multilevel-dropdown/multidropdown.js')
		
//- lazysizes--------------------------
// require('~/app/libs-vanilla/lazysizes/lazysizes.min.js')
	
//- accordion--------------------------
// require('~/app/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('~/app/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('~/app/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// var MicroModal = require('~/app/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// const Swiper = require('~/app/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------
import {tns} from '~/app/libs-vanilla/tiny-slider/dist/tiny-slider.js';

//- wNumb--------------------------
// var wNumb = require('~/app/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('~/app/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('~/app/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('~/app/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('~/app/libs-vanilla/rating/ratings.js')

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE: new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('~/app/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('~/app/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('~/app/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')
	
//- end VANILLA JS===================================

// jQuery(document).ready(function() {
// 	console.log('jQuery document ready');

// });

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.toggle-mnu:not(.toggle-mnu--close)').onclick = function(e) {
			// this.classList.toggle('on');
		document.documentElement.classList.add('menu-opened');
		document.documentElement.classList.add('lock');
	}
	document.querySelector('.toggle-mnu--close').onclick = function(e) {
			// this.classList.toggle('on');
		document.documentElement.classList.remove('menu-opened');
		document.documentElement.classList.remove('lock');
	}
	new ScrollToSects({
	  // linksContainer: 'header',//контейнер, в котором лежат кнопки навигации
	  offset: 80,//отступ от верха экрана при прокрутке (если нужен)
	  // sectsSelector: '.sect',//селектор секций, если не section
	   // delay: 0,//задержка перед прокруткой. Может понадобится, елсли перед прокруткой нужно время на анимацию закрытия моб. меню, например
	    anchorSpy: true, //добавление активного класса ссылке при скролле, если соответствующая ей секция попадает в экран
	    activeClassAdding: false //добавление классов активным ссылкам
	});

	if(document.querySelector('.reviews__sldr') !== null){
		var slider = tns({
			container: '.reviews__sldr',
				mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
				items: 1,
				loop: false,
				slideBy: 1, // кол-во слайдов, перематывающихся за 1 клик. Не работает с mode: 'gallery'
				// autoplay: true,
				// controls: false, // отключение кнопок "вперед/назад"
				controlsContainer: '.tiny-carousel__nav', // внутри .block-header__nav должны быть 2 заранее отстилизованные кнопки
				// navContainer: "#customize-thumbnails",//конткйнер для навигации миниатюрами
				// navAsThumbnails: true, //включение навигации миниатюрами
				// nav: false, //отключение bullets
				navPosition: 'bottom',//положение bullets
				mouseDrag: true,
				gutter: 10, //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!
				responsive: { // mobile first!
					375: {

				      // items: 1.1
				  },
				  640: {
				      // edgePadding: 20,
				      // gutter: 20,
				      // items: 2
				  },
				  700: {
				      // gutter: 30
				  },
				  900: {
				      // items: 3
				  }
				}
			});
	}

	const cardsRender = (function(data) {
		const cardsContainer = document.querySelector('.blog__cards');
			console.log('ubut!');
		let template = "";

		const getRandomInt = function(min, max) {
		    min = Math.ceil(min);
		    max = Math.floor(max);
				// console.log('length in func=' + Math.floor(Math.random() * (max - min + 1)) + min);
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		const pizrender = function(cards) {
			console.log(cards);
			cards.forEach((card) =>{
				template+= '<article class="blog__card card-blog">';

				if(card.img){
					template+=`<a href="#" class="card-blog__img _fit"><img src="${card.img}" alt="alt" class="_fit-img"></a>`;
				}

				if(card.date){
					template+=`<div class="card-blog__date">${card.date}</div>`;
				}
				if(card.title){
					template+=`<h4 class="card-blog__title"> <a href="#">${card.title}</a></h4>`;
				}
				if(card.text){
					template+=`<div class="card-blog__text">${card.text}</div>`;
				}
				if(card.tags && card.tags.length > 0){
					template+='<div class="card-blog__tags">';
                  	card.tags.forEach(tag => template+= `<a href="#" class="tag">${tag}</a>`);
                    template+='</div>';
				}

				template+= '</article>';
			});
			cardsContainer.insertAdjacentHTML('beforeend', template);
			template = "";
			document.querySelector('.blog__more').disabled = false;
		}
		const cardsFetch = function(length) {
			console.log('length in fetch=' + length);
			axios.get('../src/data/data.json')
				.then(function (response) {
			    // handle success
			    console.log(response.data.slice(0, length));
			    pizrender(response.data.slice(0, length));
				})
				.catch(function (error) {
			    // handle error
			    console.log(error);
				})
				.finally(function () {
			    // always executed
				});
		}
		const events = function() {
			
			if(document.querySelector('.blog__more') != null){
				document.querySelector('.blog__more').onclick = function(e) {
					e.target.disabled = true;
					cardsFetch(getRandomInt(1, 3));
				}
			}
		}
		const init = function() {

			if(cardsContainer){
				events();
			}

		}
			
		init();
	})();
	
	// console.log(cardsRender)
	
}); //DOMContentLoaded