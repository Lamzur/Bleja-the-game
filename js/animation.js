//https://www.w3schools.com/jsref/prop_element_classlist.asp
//Ovo je stranica koju sam koristio.
var kreni = function (text_pokreni){
	text_pokreni.classList.toggle('is_visible');
};

document.addEventListener('click', function (dogadjaj){

	if (dogadjaj.target.classList.contains('kreni') == false)
		return;
	dogadjaj.preventDefault();
	var text_content = document.getElementById('text_animacija');
	if (text_content == false)
		return;
	kreni(text_content);
},  false);