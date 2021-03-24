var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/korol-i-shut-cr-650x486.png') {
        myImage.setAttribute ('src','images/Music-070.png');
    } else {
        myImage.setAttribute ('src','images/korol-i-shut-cr-650x486.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'КиШ рулит, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'КиШ рулит, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}