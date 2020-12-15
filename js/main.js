const obj1=document.getElementById("object1");
const obj2=document.getElementById("object2");
const obj3=document.getElementById("object3");
const main=document.getElementById("main");
main.addEventListener("mousemove",(e)=>{
    var x=-e.pageX*.1;
    y=-e.pageY*.15;
    console.log(window.innerWidth)
    obj1.style.transform=`translateX(${x}px) translateY(${y}px)`;
    x=-e.pageX*.25;
    y=-e.pageY*.25;
    obj2.style.transform=`translateX(${x}px) translateY(${y}px)`;
    x=-e.pageX*.4;
    y=-e.pageY*.25;
   obj3.style.transform=`translateX(${x}px) translateY(${y}px)`;
}
);

obj1.style.transform='translateX(20px)'