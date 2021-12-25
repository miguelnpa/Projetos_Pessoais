const relogioHTML = document.querySelector(".titulo");

function Relogio(){
    const data = new Date();
    const dataShow = data.toLocaleString("pt-BR" , 
    { dateStyle: "full", timeStyle: "long"});
    return dataShow
};

function mostraRelogio() {
    const hour = Relogio();
    relogioHTML.innerHTML = hour;
}

setInterval(mostraRelogio, 1000);

