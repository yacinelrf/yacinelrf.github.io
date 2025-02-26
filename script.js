let name=document.getElementById("h21");
let prms=document.getElementById("prm_div");
let prm=document.getElementById("iconParam");

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
});

