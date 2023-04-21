function start(){
    var button=document.getElementById('press');
    button.onclick=change;
}

function change(){
  document.getElementById('change').style.fontSize='40px';
  document.getElementById('change').style.font='times';
  document.getElementById('change').style.color='purple';
}

window.onload=start;