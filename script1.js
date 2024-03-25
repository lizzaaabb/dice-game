var rand1 = Math.floor(Math.random()*6)+1;

if(rand1 === 1){
    document.querySelector(".img1").setAttribute("src", "dice1.png");
}else if(rand1 === 2){
    document.querySelector(".img1").setAttribute("src", "dice2.png");
}else if(rand1 === 3){
    document.querySelector(".img1").setAttribute("src", "dice3.png");
}else if(rand1 === 5){
    document.querySelector(".img1").setAttribute("src", "dice5.png");
}else if(rand1 === 6){
    document.querySelector(".img1").setAttribute("src", "dice6.png");
}

var rand2 = Math.floor(Math.random()*6)+1;

if(rand2 === 1){
    document.querySelector(".img2").setAttribute("src", "dice1.png");
}else if(rand2 === 2){
    document.querySelector(".img2").setAttribute("src", "dice2.png");
}else if(rand2 === 3){
    document.querySelector(".img2").setAttribute("src", "dice3.png");
}else if(rand2 === 5){
    document.querySelector(".img2").setAttribute("src", "dice5.png");
}else if(rand2 === 6){
    document.querySelector(".img2").setAttribute("src", "dice6.png");
}


if(rand1 > rand2){
    document.querySelector(".pl1").innerHTML = "player 1 is winner";
}else if(rand1 < rand2){
    document.querySelector(".pl2").innerHTML = "player 2 is winner";
}
if(rand1 === rand2){
    document.querySelector(".pl1").innerHTML = "player 1";
    document.querySelector(".pl2").innerHTML = "player 2";
}
if(rand2 === rand1){
    document.querySelector(".pl1").innerHTML = "player 1";
    document.querySelector(".pl2").innerHTML = "player 2";
}