let btn=document.getElementById('btn');
btn.addEventListener('click',colorChanger);
h1=document.getElementById('H1');
function colorChanger(e){
    let r= getRndInteger(0,255);
    let g= getRndInteger(0,255);
    let b= getRndInteger(0,255);
    let color=`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor=color;
    h1.textContent='Background Color: '+color;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }