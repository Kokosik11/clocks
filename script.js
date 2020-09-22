const clock = document.getElementById("clock");
const arrowM = document.getElementById("arrowM");
const arrowH = document.getElementById("arrowH");
const progressBar = document.getElementById("progressBar");
const progressBg = document.getElementById("progressBg");
const progress = document.getElementById("progress");

function getTime() {
    return new Date;
}

function transformArrow() {
    arrowM.style.transform = `rotate(${(360/60)*getTime().getMinutes() + 90}deg)`;
    arrowH.style.transform = `rotate(${(360/12)*getTime().getHours() + 90}deg)`;
    arrowS.style.transform = `rotate(${(360/60)*getTime().getSeconds() + 90}deg)`;
}

document.body.onload = transformArrow();
let timer;

let i = 25;

let progressInterval;
let opacInterval;
let iopacInterval;

function progressStart() {
    progressInterval = setInterval(progressLoad, 10);
}

let opac = 0;
let iopac = 1;

function changeOpacity() {
    if(opac == 1) clearInterval(opacInterval);
    opac += 0.01;
    clock.style.opacity = opac;
}

function insetChangeOpacity() {
    if(iopac == 0) clearInterval(iopacInterval);
    iopac -= 0.01;
    progressBg.style.opacity = iopac;
}

function progressLoad() {
    if(i == 300) {
        clearInterval(progressInterval);

        progressBar.style.borderColor = `rgb(125, 255, 222)`;
        progress.style.backgroundColor = `rgba(255, 0, 85, 0.541)`;
        progress.style.transition = `.5s`;

        setTimeout(()=>{
            opacInterval = setInterval(changeOpacity, 10);
            progressBg.transition = ".5s";
            timer = setInterval(transformArrow, 100);
        }, 500)
        setTimeout(()=>{
            iopacInterval = setInterval(insetChangeOpacity, 10);
            progressBg.transition = ".5s";
        }, 1500)
    }

    progress.style.width = `${i}px`;
    i += 1;
}

document.body.onload = progressStart();
