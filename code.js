let colorInput=document.querySelector('.color');
let body=document.querySelector('body');
let ponteiro_min=document.querySelector('.point_min');
let ponteiro_hra=document.querySelector('.ponint_hour');
let ponteiro_sec=document.querySelector('.point_sec');

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

        ponteiro_hra.style.transform=`rotate(${hourRotation}deg)`;
        ponteiro_min.style.transform=`rotate(${minuteRotation}deg)`;
        ponteiro_sec.style.transform=`rotate(${secondsRotation}deg`;
},1000);

