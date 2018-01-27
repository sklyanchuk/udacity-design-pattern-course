const Cat = function(name, src) {
	this.name = name;
	this.src = src;
	this.clicks = 0;
}

const cat1 = new Cat('Barsic', 'img/cat0.jpg');
const cat2 = new Cat('Murzic', 'img/cat1.jpg');
const cat3 = new Cat('Pashtet', 'img/cat2.jpg');
const cat4 = new Cat('Zaserya', 'img/cat3.jpg');
const cat5 = new Cat('Rizhick', 'img/cat4.jpg');
const cat6 = new Cat('Princess', 'img/cat5.jpeg');

let cats = [cat1, cat2, cat3, cat4, cat5, cat6].sort((a, b) => {
	if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

cats.forEach((cat, index) => {
	const catHTML = document.createElement('div');
	catHTML.innerHTML = `
		<h3 class="cat-name">${cat.name}</h3>
		<div class="cat-info">
			<img src="${cat.src}" class="clicks-count-img clicks-count-img-${index}">
	  	<input type="number" class="clicks-count" value="${cat.clicks}" readonly>
	  	<button class="clicks-count-reset">Reset!</button>
		</div>
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

document.querySelectorAll('.cat-name').forEach((elem) => {
	elem.addEventListener('click', (event) => {
		event.target.parentElement.classList.toggle('hidden-info');
	}, false);
});
