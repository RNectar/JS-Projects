//<!--PZ 05.03.2023-->
//<!--Na bazie tutorialu Calculator App Coding przez AsmrProg-->

const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() =>{
    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * degree;
    const ss = date.getSeconds() * degree;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})