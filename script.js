const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');
let pm = 'PM';
setInterval(() => {
    let date = new Date();
    hr.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    if(hr =>12){
        ampm.innerHTML = pm;
    }
}, 1);