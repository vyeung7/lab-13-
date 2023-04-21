function start(){
    var button=document.getElementById('press');
    button.onclick=change;
}

function change(){
  document.getElementById('title').style.fontSize='40px';
  document.getElementById('title').style.font='times';
  document.getElementById('title').style.color='purple';
}

window.onload=start;