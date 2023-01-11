const clock=document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const miustes =String(date.getMinutes()).padStart(2,"0");
    
    clock.innerText=`${hours} : ${miustes}`;
}
getClock();
setInterval(getClock,1000);





