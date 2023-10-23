var tl=gsap.timeline();

function time(){
    var a=0
    setInterval(function() {
        a=a+Math.floor(Math.random()*15)  
        if(a<100)
        document.querySelector(".loader h1").innerHTML=a+"%"
    else{
        a=100;
        document.querySelector(".loader h1").innerHTML=a+"%"
        tl.to(".loader",{
            top:"-100vh",
            duration:2,
            
            })
    }
    }, 250);
}

tl.from(".loader h1",{
  
delay:0.5,
duration:1,
onStart: time,
})

tl.to(".page1 h1",{
transform:"translateX(-65%)",
fontWeight:"100",
scrollTrigger:{
    trigger:".page1 ",
    scroller:"body",
   start:"top 0",
   end:"top -200%",
   scrub:3,
   pin:true
}
})
