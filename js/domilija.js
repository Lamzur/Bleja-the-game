var coffeeCount = 0;
var x;

function start(){
	x = document.getElementById("container");
}

function coffeeSim(){
	coffeeCount++;
	var coffee = document.createElement("img"); 
	coffee.setAttribute("class", "cup"); 
	coffee.onclick = deleteCoffee;
	x.appendChild(coffee);
	if (coffeeCount == 5){
		alert("Don't bother, the amount is infinite...");
	}
	else if(coffeeCount == 7){
		alert("No, really, don't.");
	}
	else if(coffeeCount == 10){
		alert("Okay, click away.");
	}
}

function deleteCoffee() {
	x.removeChild(this);
	alert("Don't take his coffee away!!!!");
}