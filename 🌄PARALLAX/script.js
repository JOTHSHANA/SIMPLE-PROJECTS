let sun=document.getElementById('sun');
let crow=document.getElementById('crow');
let m5=document.getElementById('m5');
let m4=document.getElementById('m4');
let m3=document.getElementById('m3');
let trees=document.getElementById('trees');
let m2=document.getElementById('m2');
let m1=document.getElementById('m1');
let text=document.getElementById('text');

window.addEventListener('scroll', function(){
    let value= this.window.scrollY;
    sun.style.top=value * 1.8 +'px';
    crow.style.top=value * 0.45 +'px';
    m1.style.top=value * 0.15 +'px';
    m2.style.top=value * 0.75 +'px';
    m3.style.top=value * 0.45 +'px';
    m4.style.top=value * 0.455 +'px';
    m5.style.top=value * 0.745 +'px';
    trees.style.top=value * 1.65 +'px';
    
    text.style.left=value* 0.2 +'px';
    
})


