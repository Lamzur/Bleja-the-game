var infoCount = 0;
var infos = [ "QWdlIDogMjA=", "R2VuZGVyIDogTWFsZQ==", "U2V4dWFsIHByZWZlcmVuY2UgOiBzdHJhaWdodA=="];
function showInfo(){
	if (infoCount >= infos.length){
		alert("You got what you wanted, you can stop clicking, or eventually continue if you're in that kind of stuff. The instagram page isn't going anywhere");
		infoCount = 0;
		var container = document.getElementById("info");
		container.innerHTML = "";
		return;
	}

	var container = document.getElementById("info");
	container.innerHTML = atob(infos[infoCount]);
	infoCount++;
	if(infoCount >= infos.length){
		var promena = document.getElementById("single");
		promena.classList.add('show');
		promena.classList.remove('hidden');

	}
}