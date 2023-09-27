// JS for onClick functionality of our hamburger
let hamburger = document.querySelector('.menu-icon');
let spanElements = document.querySelectorAll('span');

hamburger.addEventListener('click',() =>{
	hamburger.classList.toggle('active');
	
	spanElements.forEach(span => {
		span.classList.remove('no-animation');
	});
})