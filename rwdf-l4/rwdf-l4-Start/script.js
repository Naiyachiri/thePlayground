const menuElement = document.getElementsByClassName("menu");
console.log(menuElement);
const mainElement = document.getElementsByTagName("main");

menuElement[0].addEventListener('click', function(e) { // we must select[0] because menuElement is actually returning an array
	document.getElementById('drawer').classList.toggle('open');
	e.stopPropagation();
	});

mainElement[0].addEventListener('click', function(e) {
	if(e.target.id == menuElement[0]) {
		return;
	}
	else {
	document.getElementById('drawer').classList.remove('open');
	e.stopPropagation();	
	}
	
	});
