let name=document.getElementById("h21");
let prms=document.getElementById("prm_div");
let prm=document.getElementById("iconParam");
let left=document.getElementById("left");
let bars=document.getElementById("bars");

window.addEventListener("load", function() {
    name.style.left = "12%";
    name.style.transition="2s";
    prm.style.left = "20%";
    prm.style.transition="2s";
   
    
  });
  let i=0;
  prm.addEventListener("click", function() {
    if(i/2==0){
    prms.style.left="20%"
    prms.style.transition="1s";
    i=1;
    }else{
      prms.style.left="-50%"
      prms.style.transition="1s";
      i=0;
    }
})
let j=0;
bars.addEventListener("click", function() {
  if(j/2==0){
  left.style.left="0%"
  left.style.transition="1s";
  j=1;
  }else{
    left.style.left="-80%"
    left.style.transition="1s";
    j=0;
  }
})



  ;

