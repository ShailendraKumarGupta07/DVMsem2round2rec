window.onbeforeunload = function(){
  window.scrollTo(0,0);
}
// 1.function to keep navbar fixed

window.onscroll = function() {myFunction()};

var fixednav = document.getElementById("nav");
var fixed = fixednav.offsetTop;

function myFunction() {
  if (window.pageYOffset > fixed) {
    fixednav.classList.add("fixed");
    document.getElementById("image").classList.add("size");
    document.getElementById("image").src="images/spinx2.png";
    document.getElementById("n1").classList.add("size");
    document.getElementById("link1").classList.add("color");
    document.getElementById("n2").classList.add("size");
    document.getElementById("link2").classList.add("color");
    document.getElementById("n3").classList.add("size");
    document.getElementById("link3").classList.add("color");
    document.getElementById("n4").classList.add("size");
    document.getElementById("link4").classList.add("color");
    document.getElementById("n5").classList.add("size");
    document.getElementById("n6").classList.add("size1");
    document.getElementById("menu").classList.add("size");
    document.getElementById("down1").style.color="black";
    document.getElementById("down2").style.color="black";

    
   
    
    
  } else {
    fixednav.classList.remove("fixed");
    fixednav.classList.add("fixed3");
    document.getElementById("image").classList.remove("size");
    document.getElementById("image").src="images/spinx-logo-white.png";
    document.getElementById("n1").classList.remove("size");
    document.getElementById("link1").classList.remove("color");
    document.getElementById("n2").classList.remove("size");
    document.getElementById("link2").classList.remove("color");
    document.getElementById("n3").classList.remove("size");
    document.getElementById("link3").classList.remove("color");
    document.getElementById("n4").classList.remove("size");
    document.getElementById("link4").classList.remove("color");
    document.getElementById("n5").classList.remove("size");
    document.getElementById("n6").classList.remove("size1");
    document.getElementById("menu").classList.remove("size");
    document.getElementById("down1").style.color="white";
    document.getElementById("down2").style.color="white";
    
  }
}


// 3.divein image part(  WAS UNABLE TO ADD THE SLOW TRANSITION OPACITY EFFECT WHEN IMAGE IS DISPLAYED)
const link1 = document.querySelector('#l1');
const link2 = document.querySelector('#l2');
const image1 = document.querySelector('#im1');
const image2 = document.querySelector('#im2');
const image3 = document.querySelector('#im3');

link1.addEventListener('mouseenter', () => {
  image2.style.display = 'block';
  image1.style.display='none';
                     
});

link1.addEventListener('mouseleave', () => {
  image2.style.display = 'none';
  image1.style.display='block';
});

link2.addEventListener('mouseenter', () => {
  image3.style.display = 'block';
  image1.style.display='none';
});

link2.addEventListener('mouseleave', () => {
  image3.style.display = 'none';
  image1.style.display='block';
});


// 4.animation at bottom
const a1 = document.querySelector('#section14');
const a2 = a1.querySelector('.a9');
const a3 = a1.querySelector('.b9');


a1.addEventListener('mouseenter', () => {
  a2.style.animationPlayState = 'running';
  a3.style.animationPlayState = 'running';
  document.getElementById("f9").style.width="75px";
  document.getElementById("f9").style.transform="scaleX(2.3)";
  document.getElementById("f9").style.transform="translateX(10px)";
  document.getElementById("g9").style.transform="translateY(-53px) translateX(65px) rotate(45deg)";
  document.getElementById("h9").style.transform="translateY(-81px) translateX(65px) rotate(-45deg)";
  document.getElementById("g9").style.transition=" all 0.4s ease";
  document.getElementById("h9").style.transition=" all 0.4s ease";
  document.getElementById("f9").style.transition=" all 0.4s ease";

});

a1.addEventListener('mouseleave', () => {
 a2.style.animationPlayState = 'paused';
 a3.style.animationPlayState = 'paused';
 document.getElementById("f9").style.width="50px";
 document.getElementById("f9").style.transform="scaleX(1)";
 document.getElementById("f9").style.transform="translateX(-5px)";
 document.getElementById("g9").style.transform="translateY(-53px) translateX(28px) rotate(45deg)";
 document.getElementById("g9").style.transition=" all 0.4s ease";
 document.getElementById("h9").style.transition=" all 0.4s ease";
 document.getElementById("h9").style.transform="translateY(-81px) translateX(28px) rotate(-45deg)";
});


//5.fixing of divs

// project1
const myDiv = document.getElementById('d4');
const heightToFix = 2936;

window.addEventListener('scroll',function(){
  if(window.scrollY>=heightToFix && window.scrollY<3400){
    myDiv.classList.add('fixed1');
    document.getElementById('e4').classList.add('adjustments');
  }
  else if(window.scrollY>0 && window.scrollY<2936){
    myDiv.classList.remove('fixed1');
    document.getElementById('e4').classList.remove('adjustments');

  }
  else if(window.scrollY==3400){
    myDiv.classList.add('fixed1');
    document.getElementById('e4').classList.add('adjustments');
  }
  else if(window.scrollY>3400){
    myDiv.classList.remove('fixed1');
    document.getElementById('e4').classList.remove('adjustments');

  }
})
// project2
const myDiv2 = document.getElementById('d5');
const heightToFix2 = 3878;

window.addEventListener('scroll',function(){
  if(window.scrollY>=heightToFix2 && window.scrollY<4260){
    myDiv2.classList.add('fixed2');
    document.getElementById('e5').classList.add('adjustments2');
  }
  else if(window.scrollY>0 && window.scrollY<3878){
    myDiv2.classList.remove('fixed2');
    document.getElementById('e5').classList.remove('adjustments2');

  }
  else if(window.scrollY==4260){
    myDiv2.classList.add('fixed2');
    document.getElementById('e5').classList.add('adjustments2');
  }
  else if(window.scrollY>4260){
    myDiv2.classList.remove('fixed2');
    document.getElementById('e5').classList.remove('adjustments2');

  }
})
// project3
const myDiv3 = document.getElementById('d6');
const heightToFix3 = 4810;

window.addEventListener('scroll',function(){
  if(window.scrollY>=heightToFix3 && window.scrollY<5300){
    myDiv3.classList.add('fixed3');
    document.getElementById('e6').classList.add('adjustments3');
  }
  else if(window.scrollY>0 && window.scrollY<4810){
    myDiv3.classList.remove('fixed3');
    document.getElementById('e6').classList.remove('adjustments3');

  }
  else if(window.scrollY==5300){
    myDiv3.classList.add('fixed3');
    document.getElementById('e6').classList.add('adjustments3');
  }
  else if(window.scrollY>5300){
    myDiv3.classList.remove('fixed3');
    document.getElementById('e6').classList.remove('adjustments3');

  }
})
// our Expertise 
const myDiv4 = document.getElementById('c12');
const heightToFix4 = 6494;

window.addEventListener('scroll',function(){
  if(window.scrollY>=heightToFix4&& window.scrollY<7050){
    myDiv4.classList.add('fixed3');
    document.getElementById('f12').classList.add('adjustments4');
  }
  else if(window.scrollY>0 && window.scrollY<6494){
    myDiv4.classList.remove('fixed3');
    document.getElementById('f12').classList.remove('adjustments4');

  }
  else if(window.scrollY==7050){
    myDiv4.classList.add('fixed3');
    document.getElementById('f12').classList.add('adjustments4');
  }
  else if(window.scrollY>7050){
    myDiv4.classList.remove('fixed3');
    document.getElementById('f12').classList.remove('adjustments4');

  }
})


// 6.dropdown
var dropdown = document.getElementById("m12");
var div = document.getElementById("l12");

div.addEventListener("click", function() {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
    dropdown.classList.add("size3");

  } else {
    dropdown.style.display = "none";
    document.getElementById("section9").style.height="180vh";
    dropdown.classList.remove("size3");

  }
});



// -------

var dropdown1 = document.getElementById("o12");
var div1 = document.getElementById("n12");

div1.addEventListener("click", function() {
  if (dropdown1.style.display === "none") {
    dropdown1.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
  } else {
    dropdown1.style.display = "none";
    document.getElementById("section9").style.height="180vh";
  }
});

// -------

var dropdown2 = document.getElementById("r12");
var div2 = document.getElementById("p12");

div2.addEventListener("click", function() {
  if (dropdown2.style.display === "none") {
    dropdown2.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
  } else {
    dropdown2.style.display = "none";
    document.getElementById("section9").style.height="180vh";
  }
});

// -------

var dropdown3 = document.getElementById("t12");
var div3 = document.getElementById("s12");

div3.addEventListener("click", function() {
  if (dropdown3.style.display === "none") {
    dropdown3.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
  } else {
    dropdown3.style.display = "none";
    document.getElementById("section9").style.height="180vh";
  }
});

// -------

var dropdown4 = document.getElementById("v12");
var div4 = document.getElementById("u12");

div4.addEventListener("click", function() {
  if (dropdown4.style.display === "none") {
    dropdown4.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
  } else {
    dropdown4.style.display = "none";
    document.getElementById("section9").style.height="180vh";
  }
});

// -------

var dropdown5 = document.getElementById("x12");
var div5 = document.getElementById("w12");

div5.addEventListener("click", function() {
  if (dropdown5.style.display === "none") {
    dropdown5.style.display = "flex";
    document.getElementById("section9").style.height="220vh";
  } else {
    dropdown5.style.display = "none";
    document.getElementById("section9").style.height="180vh";
  }
});

// 7.horizontal modal
var horizontal = document.getElementById("e13");
var show = document.getElementById("d13");

show.addEventListener("click", function() {
  if (horizontal.style.display === "none") {
    horizontal.style.display = "flex";
    document.getElementById("c13a").style.width="600px";
    document.getElementById("e13").style.transform="translateX(50px)";
    document.getElementById("c13b").style.transform="translateX(50px)";
    document.getElementById("c13c").style.transform="translateX(50px)";
    document.getElementById("c13d").style.transform="translateX(50px)";
    

  } else {
    horizontal.style.display = "none";
    document.getElementById("c13a").style.width="150px";
    document.getElementById("e13").style.transform="translateX(-50px)";
    document.getElementById("c13b").style.transform="translateX(0px)";
    document.getElementById("c13c").style.transform="translateX(0px)";
    document.getElementById("c13d").style.transform="translateX(0px)";

  }
});




// ----
var horizontal1 = document.getElementById("g13");
var show1 = document.getElementById("f13");

show1.addEventListener("click", function() {
  if (horizontal1.style.display === "none") {
    horizontal1.style.display = "flex";
    document.getElementById("c13b").style.width="600px";
    document.getElementById("g13").style.transform="translateX(50px)";
    document.getElementById("c13c").style.transform="translateX(50px)";
    document.getElementById("c13d").style.transform="translateX(50px)";
  } else {
    horizontal1.style.display = "none";
    document.getElementById("c13b").style.width="150px";
    document.getElementById("g13").style.transform="translateX(-50px)";
    document.getElementById("c13c").style.transform="translateX(0px)";
    document.getElementById("c13d").style.transform="translateX(0px)";
  }
});


// ----
var horizontal2 = document.getElementById("i13");
var show2 = document.getElementById("h13");

show2.addEventListener("click", function() {
  if (horizontal2.style.display === "none") {
    horizontal2.style.display = "flex";
    document.getElementById("c13c").style.width="600px";
    document.getElementById("i13").style.transform="translateX(50px)";
    document.getElementById("c13d").style.transform="translateX(50px)";

  } else {
    horizontal2.style.display = "none";
    document.getElementById("c13c").style.width="150px";
    document.getElementById("i13").style.transform="translateX(-50px)";
    document.getElementById("c13d").style.transform="translateX(0px)";
  }
});



// ------


var horizontal3 = document.getElementById("k13");
var show3 = document.getElementById("j13");

show3.addEventListener("click", function() {
  if (horizontal3.style.display === "none") {
    horizontal3.style.display = "flex";
    document.getElementById("c13d").style.width="600px";
    document.getElementById("k13").style.transform="translateX(50px)";

  } else {
    horizontal3.style.display = "none";
    document.getElementById("c13d").style.width="150px";
    document.getElementById("k13").style.transform="translateX(-50px)";
    

  }
});


//8. horizontal sliding of images when scrolling up and down

// function Scroll() {
//   var carousel = document.getElementById('slide2');
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition > Scroll.lastScrollPosition) {
//     // Scrolling down
//     carousel.style.transform = 'translateX(-10%)';
    
//   }
//    else if(scrollPosition< Scroll.lastScrollPosition) {
//     carousel.style.transform = 'translateX(-15%)';
//   }
//    else if(scrollPosition> ((Scroll.lastScrollPosition)+('150px'))) {
//     carousel.style.transform = 'translateX(10%)';
//   }
//   else {
//     // Scrolling up
//     var scrollDistance = scrollPosition - Scroll.lastScrollPosition;
//   }
// }

// // Initial scroll position
// Scroll.lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// // Attach the scroll event listener
// window.addEventListener('scroll', Scroll);

function Scroll() {
  var carousel = document.getElementById('slide2');
  var scrollPosition = window.pageYOffset ;
  var scrollDistance = scrollPosition - Scroll.lastScrollPosition; //(scrollDistance can be positive or negative)

  carousel.style.transform = 'translateX(' + (0.3*(-scrollDistance)) +'px)';
  
}

Scroll.lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;  ;

window.addEventListener('scroll', Scroll);


function Scroll2() {
  var carousel2 = document.getElementById('slide3');
  var scrollPosition2 = window.pageYOffset 
  var scrollDistance2 = scrollPosition2 - Scroll2.lastScrollPosition; //(scrollDistance can be positive or negative)

  carousel2.style.transform = 'translateX(' + (0.3*(scrollDistance2)) +'px)';

}

Scroll2.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll2);


function Scroll3() {
  var carousel3 = document.getElementById('slide4');
  var scrollPosition3 = window.pageYOffset 
  var scrollDistance3 = scrollPosition3 - Scroll3.lastScrollPosition; //(scrollDistance can be positive or negative)

  carousel3.style.transform = 'translateX(' + (0.3*(-scrollDistance3)) +'px)';

}

Scroll3.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll3);



function Scroll4() {
  var carousel4 = document.getElementById('slide5');
  var scrollPosition4 = window.pageYOffset 
  var scrollDistance4 = scrollPosition4- Scroll4.lastScrollPosition; //(scrollDistance can be positive or negative)

  carousel4.style.transform = 'translateX(' + (0.2*(scrollDistance4))+'px)';

}

Scroll4.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll4);


//9.sliding up and down of images on scrolling up and down

function Scroll5() {
  var image1 = document.getElementById('PIC1');
  var scrollPosition5 = window.pageYOffset 
  var scrollDistance5 = scrollPosition5- Scroll5.lastScrollPosition; //(scrollDistance can be positive or negative)

 image1.style.transform = 'translateY(' + (0.4*(-scrollDistance5))+'px)';

}

Scroll5.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll5);


function Scroll6() {
  var image2 = document.getElementById('PIC2');
  var scrollPosition6 = window.pageYOffset 
  var scrollDistance6 = scrollPosition6- Scroll6.lastScrollPosition; //(scrollDistance can be positive or negative)

 image2.style.transform = 'translateY(' + (0.4*(-scrollDistance6))+'px)';

}

Scroll6.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll6);


function Scroll7() {
  var image3 = document.getElementById('PIC3');
  var scrollPosition7 = window.pageYOffset 
  var scrollDistance7 = scrollPosition7- Scroll7.lastScrollPosition; //(scrollDistance can be positive or negative)

 image3.style.transform = 'translateY(' + (0.4*(-scrollDistance7))+'px)';

}

Scroll7.lastScrollPosition = window.pageYOffset|| document.documentElement.scrollTop ;

window.addEventListener('scroll', Scroll7);

//11.direct top button (code copied from the previous task of job listing app)
function toggleBackToTopBtn() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// function for calling when scrolling 
window.addEventListener('scroll', toggleBackToTopBtn);


// this scrolls back to top
const backToTopBtn = document.getElementById('back-to-top-btn');

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// 12.Custom Cursor
var cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 7.5)+"px; left: "+(e.pageX - 7.5)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("click");

    setTimeout(() => {
        cursor.classList.remove("click");
    }, 500)
})
var cursor2 = document.querySelector('#cursor2');

document.addEventListener('mousemove', e => {
    cursor2.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")
})

document.addEventListener('click', () => {
    cursor2.classList.add("click");

    setTimeout(() => {
        cursor2.classList.remove("click");
    }, 500)
}
)



// document.querySelector("a").addEventListener('mouseenter', () => {
// cursor.classList.add('linkanimation');
// cursor2.classList.add('linkanimation2');



// });
// document.querySelector("a").addEventListener('mouseleave', () => {
//   cursor2.classList.remove('linkanimation2');
//   cursor.classList.remove('linkanimation');

// });


var anchorlink = document.getElementsByTagName('a');


for (var i = 0; i < anchorlink.length; i++) {
  anchorlink[i].addEventListener('mouseover', () =>{
    cursor.classList.add('linkanimation');
    cursor2.classList.add('linkanimation2');
  });
  
  
  anchorlink[i].addEventListener('mouseout', () =>{
    cursor.classList.remove('linkanimation');
    cursor2.classList.remove('linkanimation2');
  });
}
var buttons = document.getElementsByTagName('button');


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', () =>{
    cursor.classList.add('linkanimation');
    cursor2.classList.add('linkanimation2');
  });
  
  
  buttons[i].addEventListener('mouseout', () =>{
    cursor.classList.remove('linkanimation');
    cursor2.classList.remove('linkanimation2');
  });
}

var images = document.getElementsByTagName('img');
var eye = document.getElementById('eye');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', () =>{
    // cursor.classList.add('linkanimation3');
    eye.style.display="block";
    cursor2.classList.add('linkanimation2');
});


images[i].addEventListener('mouseout', () =>{
  eye.style.display="none";
    cursor2.classList.remove('linkanimation2');
  });
}

document.querySelector("#l12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#l12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });


  
document.querySelector("#n12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#n12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });


document.querySelector("#p12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#p12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });


document.querySelector("#s12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#s12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });


document.querySelector("#u12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#u12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });


document.querySelector("#w12").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#w12").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });
  

document.querySelector("#section4").addEventListener('mouseover', () => {
  eye.style.display="block";
  cursor2.classList.add('linkanimation2');
  cursor.classList.add('linkanimation3');
  
  
  
  });
  document.querySelector("#section4").addEventListener('mouseout', () => {
    cursor2.classList.remove('linkanimation2');
    eye.style.display="none";
    cursor.classList.remove('linkanimation3');
  
  });
  
  

document.querySelector("#section5").addEventListener('mouseover', () => {
  eye.style.display="block";
  cursor2.classList.add('linkanimation2');
  cursor.classList.add('linkanimation3');
  
  
  
  });
  document.querySelector("#section5").addEventListener('mouseout', () => {
    cursor2.classList.remove('linkanimation2');
    eye.style.display="none";
    cursor.classList.remove('linkanimation3');
  
  });
  
  

document.querySelector("#section6").addEventListener('mouseover', () => {

  eye.style.display="block";
  cursor2.classList.add('linkanimation2');
  cursor.classList.add('linkanimation3');
  
  
  
  });
  document.querySelector("#section6").addEventListener('mouseout', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation3');
    eye.style.display="none";
  
  });
  
  document.querySelector("#l13").addEventListener('mouseenter', () => {
    cursor.classList.add('linkanimation');
    cursor2.classList.add('linkanimation2');
    
    
    
    });
    document.querySelector("#l13").addEventListener('mouseleave', () => {
      cursor2.classList.remove('linkanimation2');
      cursor.classList.remove('linkanimation');
    
    });
  
    document.querySelector("#m13").addEventListener('mouseenter', () => {
  cursor.classList.add('linkanimation');
  cursor2.classList.add('linkanimation2');
  
  
  
  });
  document.querySelector("#m13").addEventListener('mouseleave', () => {
    cursor2.classList.remove('linkanimation2');
    cursor.classList.remove('linkanimation');
  
  });

  document.querySelector("#n13").addEventListener('mouseenter', () => {
    cursor.classList.add('linkanimation');
    cursor2.classList.add('linkanimation2');
    
    
    
    });
    document.querySelector("#n13").addEventListener('mouseleave', () => {
      cursor2.classList.remove('linkanimation2');
      cursor.classList.remove('linkanimation');
    
    });
  document.querySelector("#o13").addEventListener('mouseenter', () => {
    cursor.classList.add('linkanimation');
    cursor2.classList.add('linkanimation2');
    
    
    
    });
    document.querySelector("#o13").addEventListener('mouseleave', () => {
      cursor2.classList.remove('linkanimation2');
      cursor.classList.remove('linkanimation');
    
    });

    document.querySelector("#section14").addEventListener('mouseenter', () => {
      cursor.classList.add('linkanimation');
      cursor2.classList.add('linkanimation2');
      
      
      
      });
      document.querySelector("#section14").addEventListener('mouseleave', () => {
        cursor2.classList.remove('linkanimation2');
        cursor.classList.remove('linkanimation');
      
      });

document.getElementById('learn1').addEventListener('mouseenter', () =>{
  document.getElementById('section17').style.display="none";
  body.style.cursor="default";
  
})

document.getElementById('learn1').addEventListener('mouseleave', () =>{
  document.getElementById('section17').style.display="block";
  body.style.cursor="none";
})

document.getElementById('learn2').addEventListener('mouseenter', () =>{
  document.getElementById('section17').style.display="none";
  body.style.cursor="default";
})

document.getElementById('learn2').addEventListener('mouseleave', () =>{
  document.getElementById('section17').style.display="block";
  body.style.cursor="none";
})

document.getElementById('learn3').addEventListener('mouseenter', () =>{
  document.getElementById('section17').style.display="none";
  body.style.cursor="default";
})

document.getElementById('learn3').addEventListener('mouseleave', () =>{
  document.getElementById('section17').style.display="block";
  body.style.cursor="none";
})











