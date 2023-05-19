function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("menu").style.position="fixed"
   
   var x =document.getElementById("hide")
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {

    x.style.display = "block";
    // x.style.height="40vh"
    // x.style.width="100vw"
    x.style.marginTop="0";
    x.style.marginLeft="0";
    // x.style.position="fixed"
    x.style.paddingBottom="10px";
    x.style.right="0";
  }
}
