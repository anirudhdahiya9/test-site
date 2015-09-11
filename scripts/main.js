var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc==='images/firefox-logo.png')
	{
		myImage.setAttribute('src','images/oops.png');
	}
	else
	{
		myImage.setAttribute('src','images/firefox-logo.png');
	}
}

var myButton=document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is Cool,' + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is Cool,' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
