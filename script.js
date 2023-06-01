

function getTime() {
    let date = new Date();
    document.getElementById("displayTime").innerHTML=date;
}

setInterval(getTime, 1000);