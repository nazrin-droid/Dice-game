var randomNums=Math.floor(Math.random()*6) + 1;

var randomimages="images/dice"+randomNums+".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomimages);


var randomnums2= Math.floor(Math.random()*6)+1;

var randomimages2 ="images/dice"+randomnums2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomimages2);

if(randomNums>randomnums2)
{
    document.querySelector("h1").innerHTML="🚩 player 1 wins !";
}
else if(randomnums2 > randomNums){
    document.querySelector("h1").innerHTML="🚩 player 2 wins !";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

