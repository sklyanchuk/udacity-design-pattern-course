const Cat = function(name, src) {
	this.name = name;
	this.src = src;
	this.clicks = 0;
}

const cat1 = new Cat('Barsic', 'img/cat0.jpg');
const cat2 = new Cat('Murzic', 'img/cat1.jpg');

let cats = [cat1, cat2];

cats.forEach((cat, index) => {
	const catHTML = document.createElement('li');
	catHTML.innerHTML = `
		<h3 class="cat-name">${cat.name}</h3>
		<img src="${cat.src}" class="clicks-count-img clicks-count-img-${index}">
  	<input type="number" class="clicks-count" value="${cat.clicks}" readonly>
  	<button class="clicks-count-reset">Reset!</button>
	`;
	document.querySelector('.all-cats').appendChild(catHTML);
});

document.querySelectorAll('.clicks-count-img').forEach((elem) => {
	elem.addEventListener('click', (event) => {
		let clicksCount = parseInt(event.target.parentElement.querySelector('.clicks-count').value) + 1;
	  event.target.parentElement.querySelector('.clicks-count').value = clicksCount;
	}, false);
});

document.querySelectorAll('.clicks-count-reset').forEach((elem) => {
	elem.addEventListener('click', (event) => {
  	event.target.parentElement.querySelector('.clicks-count').value = 0;
	}, false);
});
