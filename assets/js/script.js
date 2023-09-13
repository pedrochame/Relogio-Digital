const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let h = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if(h<10){
        h = '0' + h;
    }
    if(min<10){
        min = '0' + min;
    }
    if(s<10){
        s = '0' + s;
    }
    
    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = s;

})