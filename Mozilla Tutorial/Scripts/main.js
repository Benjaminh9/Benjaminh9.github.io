let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Best-Dog-Food-For-Cavalier-King-Charles.jpg') {
      myImage.setAttribute ('src','Images/twocavs.jpg');
    } else {
      myImage.setAttribute ('src','Images/Best-Dog-Food-For-Cavalier-King-Charles.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Cavalier King Charles Spaniel Fans, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cavalier King Charles Spaniel Fans', + storedName;
}

myButton.onclick = function() {
    setUserName();
}