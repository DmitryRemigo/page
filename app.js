const htmlOll = document.querySelector('html')
const bullDadService = document.querySelector('.service__content');
const bullDadServiceDescription = document.querySelector('.service__description');
const chevron1 = document.querySelector('.chevron1')
const chevron2 = document.querySelector('.chevron2')
const chevron3 = document.querySelector('.chevron3')
const chevron4 = document.querySelector('.chevron4')
const lineTop = document.querySelector('.burger__line_top')
const lineCenter = document.querySelector('.burger__line_center')
const lineBottom = document.querySelector('.burger__line_bottom')
const burgerBoby = document.querySelector('.header__nav_burger_content');
const headerNav = document.querySelector('.header__nav');
const burgerClose = document.querySelector('.burger__menu__close');
const burgerMenu = document.querySelector('.burger__menu');
const burgerContent = document.querySelector('.header__nav_burger_content');
const menuWrapper = document.querySelector('.menu__wrapper');
const buttonOpen = document.querySelectorAll('.button__open');
const conectWrapper = document.querySelector('.conect__wrapper');
const conectBody = document.querySelector('.conect__body');
const conectDuttonsClose = document.querySelector('.conect__buttons__close');
const menuClose = document.querySelectorAll('.burger__menu__item_close');
const descriptionItem = document.querySelectorAll('.description__item');

window.onscroll = function(e){
if(this.oldScroll > this.scrollY || this.scrollY<200){
headerNav.classList.remove('active');
}else{
headerNav.classList.add('active');
}
this.oldScroll = this.scrollY;
}

function burger(e){
htmlOll.classList.toggle('active');
burgerMenu.classList.toggle('active');
burgerContent.classList.toggle('active');
menuWrapper.classList.toggle('active');

};
burgerBoby.addEventListener('click' , burger);
burgerClose.addEventListener('click' , burger);
menuWrapper.addEventListener('click' , burger);

menuClose.forEach(function(element){
	element.addEventListener('click' , burger);
});



function bullDad(e){
bullDadServiceDescription.classList.toggle('active')
chevron1.classList.toggle('active')};
bullDadService.addEventListener('click' , bullDad);

const bullDadcost = document.querySelector('.cost');
const bullDadcosteDescription = document.querySelector('.cost__description');
function cost(e){
bullDadcosteDescription.classList.toggle('active')
chevron2.classList.toggle('active')};
bullDadcost.addEventListener('click' , cost);

const bullDadsupport = document.querySelector('.support');
const bullDadsupporteDescription = document.querySelector('.support__description');
function support(e){
bullDadsupporteDescription.classList.toggle('active')
chevron3.classList.toggle('active')};
bullDadsupport.addEventListener('click' , support);

const bulladvertisement = document.querySelector('.advertisement');
const bulladvertisementDescription = document.querySelector('.advertisement__description');
function advertisement(e){
bulladvertisementDescription.classList.toggle('active')
chevron4.classList.toggle('active')};
bulladvertisement.addEventListener('click' , advertisement);

const burgerItemHeader = document.querySelector('.burger__item__header');
const burgerMenuDescription = document.querySelector('.burger__menu__description');
const chevronBurger = document.querySelector('.chevronBurger');
function openFerstPopap(e){
	burgerMenuDescription.classList.toggle('active')
	chevronBurger.classList.toggle('active')};
	burgerItemHeader.addEventListener('click' , openFerstPopap);

	//buttonOpen

function openConect(e){
	conectWrapper.classList.toggle('active')
	conectBody.classList.toggle('active')
}

buttonOpen.forEach(element => {
	element.addEventListener('click' , openConect);
});

conectDuttonsClose.addEventListener('click' , openConect);


const alertWriteBudy = document.querySelector('.conect__buttons__send');
const footerButtonBody = document.querySelector('.footer__button__body');
let token = '5785265235:AAHN4tqPfLwJQjzm4QLFe0TXcoxboa5Wk5A';
let chatId = '5770737172';




let sendMessages = () =>{
	let telephon = document.querySelector('.telephon');
	let names = document.querySelector('.names');
	let texts = document.querySelector('.texts');
	
	//telephon.value;
	
	let setRed=()=>{
		names.classList.add('active')
	}
	let remRed=()=>{
		names.classList.remove('active')
	}
	
	let setTelephonRed=()=>{
		telephon.classList.add('active')
	}
	let remTelephonRed=()=>{
		telephon.classList.remove('active')
	}
	const  alertWrite = document.querySelector('.alert__write');
	
	let setAlertWrite=()=>{
		alertWrite.classList.add('active')
	}
	let remAlertWrite=()=>{
		alertWrite.classList.remove('active')
	}
	
let txt = `Телефон: ${telephon.value}`+"%0A"+`Имя: ${names.value}`+"%0A"+`Сообщение: ${texts.value}`;
let xhr = new XMLHttpRequest();
let URL =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`
xhr.open("GET", URL, [true])
if(telephon.value.length<7&&names.value.length<2){
	setTelephonRed();
	setTimeout(remTelephonRed, 1000);
	setRed();
	setTimeout(remRed, 1000);
}else if(telephon.value.length<7||telephon.value==='89993332211'){
	setTelephonRed();
	setTimeout(remTelephonRed, 1000);
}else if(names.value.length<2||names.value==='Имя'){
	setRed()
	setTimeout(remRed, 1000);
}else{
	xhr.send();
	setAlertWrite();
	setTimeout(remAlertWrite, 2000);
}
footerButtonBody.classList.add('active')
let remf =()=>{
	footerButtonBody.classList.remove('active')
}
setTimeout(remf,300)
}

footerButtonBody.addEventListener('click' , sendMessages);

let sendMessages2 = () =>{
	let telephon = document.querySelector('.telephon2');
	let names = document.querySelector('.name2');
	let texts = document.querySelector('.texts2');
	
	//telephon.value;
	
	let setRed=()=>{
		names.classList.add('active')
	}
	let remRed=()=>{
		names.classList.remove('active')
	}
	
	let setTelephonRed=()=>{
		telephon.classList.add('active')
	}
	let remTelephonRed=()=>{
		telephon.classList.remove('active')
	}
	const  alertWrite = document.querySelector('.alert__write');
	
	let setAlertWrite=()=>{
		alertWrite.classList.add('active')
	}
	let remAlertWrite=()=>{
		alertWrite.classList.remove('active')
	}
	
let txt = `Телефон: ${telephon.value}`+"%0A"+`Имя: ${names.value}`+"%0A"+`Сообщение: ${texts.value}`;
let xhr = new XMLHttpRequest();
let URL =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`
xhr.open("GET", URL, [true])
if(telephon.value.length<7&&names.value.length<2){
	setTelephonRed();
	setTimeout(remTelephonRed, 1000);
	setRed();
	setTimeout(remRed, 1000);
}else if(telephon.value.length<7||telephon.value==='89993332211'){
	setTelephonRed();
	setTimeout(remTelephonRed, 1000);
}else if(names.value.length<2||names.value==='Имя'){
	setRed()
	setTimeout(remRed, 1000);
}else{
	xhr.send();
	setAlertWrite();
	setTimeout(remAlertWrite, 2000);
}
}
alertWriteBudy.addEventListener('click' , sendMessages2);



let telephonClearMean = document.querySelector('.telephon');
telephonClearMean.addEventListener('click' , ClearMean=()=>{telephonClearMean.setAttribute('value', '')});

let nameClearMean = document.querySelector('.names');
nameClearMean.addEventListener('click' , ClearMean=()=>{nameClearMean.setAttribute('value', '')});

let telephon2ClearMean = document.querySelector('.telephon2');
telephon2ClearMean.addEventListener('click' , ClearMean2=()=>{telephon2ClearMean.setAttribute('value', '')});

let name2ClearMean = document.querySelector('.name2');
name2ClearMean.addEventListener('click' , ClearMean2=()=>{name2ClearMean.setAttribute('value', '')});


descriptionItem.forEach(function(elem){
	elem.addEventListener('click' , burger);
	elem.addEventListener('click' , openFerstPopap);
});



const animItems = document.querySelectorAll('.anim');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animItemStart = 4;


			let animPoint = window.innerHeight - animItemHight / animItemStart;
			if (animItemHight > window.innerHeight) {
			animPoint = window.innerHeight - window.innerHeight / animItemStart;
			}

			if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHight)) {
				animItem.classList.add('activ');
			} else{ 
				if (!animItem.classList.contains('anims-point')) {
				animItem.classList.remove('activ');
				}
			}
		}
	}
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

setTimeout(() => {
animOnScroll();
	},300);
}




let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
	stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
	typeSpeed: 110, // Скорость печати
	startDelay: 1500, // Задержка перед стартом анимации
	backSpeed: 30, // Скорость удаления
	loop: true // Указываем, повторять ли анимацию
});


