let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

 
setInterval(()=>{
    let currentTime=new Date();
    hrs.innerHTML=currentTime.getHours(); 
    sec.innerHTML=currentTime.getSeconds(); 
    min.innerHTML=currentTime.getMinutes(); 
},1000)