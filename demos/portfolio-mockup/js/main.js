const headerbbElement = document.getElementsByClassName("header-bb")[0];
console.log(headerbbElement);
const mainElement = document.getElementsByTagName("main")[0];
const navbarElement = document.getElementsByClassName("navbar")[0];

headerbbElement.addEventListener('click', function(e) { // toggle open class to reveal the nav menu
	navbarElement.classList.toggle('open');
	e.stopPropagation();
	});

mainElement.addEventListener('click', function(e) { // remove the open class if any location other than the nav menu is clicked
	if(e.target.id == headerbbElement[0]) {
		return;
	}
	else {
	navbarElement.classList.remove('open');
	e.stopPropagation();	
	}
	});