document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
       e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0px";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  

 let imgCont1 = document.getElementById("Trivia")
let index = 1;
  let Imgs=[2,3,4];
  let prev1 = document.getElementById("prev");
  let next1 = document.getElementById("next");
  let prev2= document.getElementById("prev2");
  let next2= document.getElementById("next2");
  let imgCont2 = document.getElementById("MovieCat")
  function nextImg(){
    if(index <= Imgs.length){
      index+=1;
      imgCont1.src =`P1Imgs/triviaQ${index}.png`;
    
    }
    else{
      index = 1;
      imgCont1.src =`P1Imgs/triviaQ${index}.png`;
    
    }
  }
  next1.addEventListener("click",nextImg);

 function PrevImg(){
  if (index > 1){
    index -= 1;
    imgCont1.src =`P1Imgs/triviaQ${index}.png`;
  }
  else{
    index = 4;
    imgCont1.src =`P1Imgs/triviaQ${index}.png`;
  }
 }
 prev1.addEventListener("click",PrevImg);
let Imgs2 =[2,3];
function nextImg2(){
  if(index <= Imgs2.length){
    index += 1;
    imgCont2.src= `P2Imgs/movieCatalog${index}.png`;
  }
  else{
    index = 1 ;
    imgCont2.src= `P2Imgs/movieCatalog${index}.png`;
  }
}
function PrevImg2(){
  if (index > 1){
    index -=1;
    imgCont2.src= `P2Imgs/movieCatalog${index}.png`;
  }
  else{
    index = 2
    imgCont2.src= `P2Imgs/movieCatalog${index}.png`;
  }
}
next2.addEventListener("click",nextImg2);
prev2.addEventListener("click",PrevImg2);
