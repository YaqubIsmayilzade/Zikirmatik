let count = 0;
let number = document.getElementById("number");


document.getElementById("add").onclick= function(){
    count++;
    number.textContent = count;
    window.navigator.vibrate(1000);
}

document.getElementById("reset").onclick = function(){
    count = 0;
    number.textContent=count;
    window.navigator.vibrate(1000);
}
