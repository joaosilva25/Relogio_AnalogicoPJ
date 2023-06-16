let colorInput=document.querySelector('.color');
let body=document.querySelector('body');
let pointMin=document.querySelector('.point_min');
let pointHour=document.querySelector('.point_hour');
let pointSec=document.querySelector('.point_sec');

function changeColor() {

    let colorSelect= colorInput.value;
    body.style.backgroundColor = `${colorSelect}`;
}

colorInput.addEventListener('input',changeColor);


setInterval(() => {
        
        let date=new Date();
        let horas=date.getHours();
        let minutes=date.getMinutes();
        let sec=date.getSeconds();

        const hourRotation = (horas % 12) * 30 + minutes * 0.5;
        const minuteRotation = minutes * 6;
        const secondsRotation = sec * 6;

        pointHour.style.transform=`rotate(${hourRotation}deg)`;
        pointMin.style.transform=`rotate(${minuteRotation}deg)`;
        pointSec.style.transform=`rotate(${secondsRotation}deg)`;

},1000);

