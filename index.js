var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=" 🥰 Player1 💕 Player2 🥰";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML=" Player2 🥰 💕 🥰Player1 ";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML=" Play1💏Play2 loves each other ";
}
