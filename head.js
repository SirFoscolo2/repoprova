
let place1=document.getElementById("tetris1");
let place2=document.getElementById("tetris2");
let place3=document.getElementById("tetris3");
let place4=document.getElementById("tetris4");
let place5=document.getElementById("tetris5");
let y=0;
let x=0;
let mx=0;
function move(){

    if(y<600){
        y += 3;
        place1.style.top = y+"px";
        place2.style.top = y+"px";
        place3.style.top = y+"px";
        place4.style.top = y+"px";
        place5.style.top = y+50+"px";
    }
}
function destra(){
    if(x<1000){
        x += 50;
        place1.style.left = x+"px";
        place2.style.left = x+50+"px";
        place3.style.left = x+100+"px";
        place4.style.left = x+150+"px";
        place5.style.left = x+"px";

    }
}
function sinistra(){
   
        x -= 50;
        place1.style.left = x+"px";
        place2.style.left = x+50+"px";
        place3.style.left = x+100+"px";
        place4.style.left = x+150+"px";
        place5.style.left = x+"px";

    
}
function nuovo(){

}



setInterval(move,100);  
