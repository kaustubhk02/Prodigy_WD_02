let hrs = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let resetbtn = document.querySelector("#b3");
let stopbtn = document.querySelector("#b2");
let startbtn = document.querySelector("#b1");

let stop = true;

let h = m = s = 0;

function updateDisplay(){
    if(s<10){
        sec.innerText = "0" + s;
    }
    else{
        sec.innerText = s;
    }
// sec.innerText = s<10 ? "0" + s : s;
    min.innerText = m<10 ? "0" + m : m;
    hrs.innerText = h<10 ? "0" + h : h;
}
const startTimer = ()=>{
    if(stop){
        return;
    }
    s++;
    if(s === 60){
        s = 0;
        m++;
    }
    if(m === 60){
        m = 0;
        h++;
    }
    updateDisplay();
    setTimeout(startTimer, 1000);
}

resetbtn.addEventListener("click", ()=>{
    stop=true;
    resetbtn.style.color = "#e63946";
    resetbtn.style.backgroundColor = "beige";
    resetbtn.style.borderColor = "#e63946";

    setTimeout(()=>{
        resetbtn.style.color = "beige";
        resetbtn.style.backgroundColor = "#e63946";
        resetbtn.style.borderColor = "";
    },300);

    h = m = s = 0;
    updateDisplay();

    startbtn.style.color = "beige";
    startbtn.style.backgroundColor = "#e63946";
    startbtn.style.borderColor = "";
    stopbtn.style.color = "beige";
    stopbtn.style.backgroundColor = "#e63946";
    stopbtn.style.borderColor = "";
})

stopbtn.addEventListener("click", ()=>{
    if(stop == false){
        stop = true;
        stopbtn.style.color = "#e63946";
        stopbtn.style.backgroundColor = "beige";
        stopbtn.style.borderColor = "#e63946";
        startbtn.style.color = "beige";
        startbtn.style.backgroundColor = "#e63946";
        startbtn.style.borderColor = "";
    }
});

startbtn.addEventListener("click", ()=>{
    if(stop == true){
        stop=false;
        startTimer();
    }
    startbtn.style.color = "#e63946";
    startbtn.style.backgroundColor = "beige";
    startbtn.style.borderColor = "#e63946";
    stopbtn.style.color = "beige";
    stopbtn.style.backgroundColor = "#e63946";
    stopbtn.style.borderColor = "";
});

// startbtn.onclick = () => {
//     start(sec);
//     startbtn.style.color = "#e63946";
//     startbtn.style.backgroundColor = "beige";
//     startbtn.style.borderColor = "#e63946";
// };


