function start(){

	var nameInput = document.getElementById("ime");
	nameInput.oninvalid = invalidName;
	nameInput.oninput = invalidName;

	var surnameInput = document.getElementById("prezime");
	surnameInput.oninvalid = invalidSurname;
	surnameInput.oninput = invalidSurname;
	//namerno sam mail i komentar validaciju posebno napravio "primitivnijim" js-om radi malo varijacije
}

function invalidName(){
	this.setCustomValidity("");
	if (this.validity.valueMissing){
		this.setCustomValidity("Please, fill out the name form.");
	}
}

function invalidSurname(){
	this.setCustomValidity("");
	if(this.validity.valueMissing){
		this.setCustomValidity("Please, fill out the surname form.");
	}
}
function checkMail(){
	var mail = document.form.mail.value;
	var at = 0;
	var attest;
	var dot = 0;
	var dottest;
	/*posto sam nasao na internetu jako specifican nacin za proveru validacije e mail adrese koja
	je bila jako specificna i dosta laka ako se prati objasnjenje, napravio sam sopstvenu verziju.
	U ovoj se mail rucno proverava, i za sada radi ako postoji samo jedna tacka, koja je iza znaka '@'*/
	for(var i = 0; i < mail.length; i ++){
		var c = mail.charAt(i);
		if(c == '@'){
			at++;
			attest = i;
		}
		else if(c == '.'){
			dot++;
			dottest = i;
		}
	}
		if(at == 1 && dot == 1 && (dottest > attest)){
			return true;
		}
		else
			return false;
	}

function checkText(){
	var text = document.form.text.value;
	if((text =="Insert your comment here.") || (text == "")){
		return false;
	}
	else
		return true;
}

function checkForm(){
	/*if(checkName() == false && checkSurname() == false && checkMail() == false && checkText() == false){
		alert("Please fill out all the forms.");
		return false;
	}
	else if(checkName() == false && checkSurname() == false && checkMail() == false){
		alert("Please fill out the name boxes and the e-mail box.");
		return false;
	}
	else if(checkName() == false && checkSurname() == false && checkText() == false){
		alert("Please fill out the name boxes and the text box.");
		return false;
	}
	else if(checkName() == false && checkMail() == false && checkText() == false){
		alert("Please fill out the name box, e-mail box, and the text box.");
		return false;
	}
	else if(checkSurname() == false && checkMail() == false && checkText() == false){
		alert("Please fill out the surname box, e-mail box, and the text box.");
		return false;
	}
	else if(checkName() == false && checkSurname() == false){
		alert("Please fill out the name boxes.");
		return false;
	}
	else if(checkName() == false && checkMail() == false){
		alert("Please fill out the name and the e-mail box.");
		return false;
	}
	else if(checkName() == false && checkText() == false){
		alert("Please fill out the name and text box.")
		return false;
	}
	else if(checkSurname() == false && checkText() == false){
		alert("Please fill out the surname and text box.")
		return false;
	}
	else if(checkSurname() == false && checkMail() == false){
		alert("Please fill out the surname and the e-mail box.")
		return false;
	}
	else if(checkMail() == false && checkText() == false){
		alert("Please fill out the text and the e-mail box.")
		return false;
	}
	
	Posto sam radio postepeno, ovaj gornji kod vise nije bio potreban, ostavio sam ga
	kako biste videli postepeno pisanje programa i kao neka vrsta validacije ako se moze tako reci :)*/
	if(checkMail() == false){
		alert("E-mail adress is not valid!"); 
		return false;
	}
	else if(checkText() == false){ 
		alert ("Please, fill out the text box!"); 
		return false;
	}
	return true;
}