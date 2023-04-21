function start(){
    var button=document.getElementById('press');
    button.onclick=change;
}

function change(){
   var changeInColor= 'pink';

  document.getElementById('title').style.fontSize='40px';
  document.getElementById('title').style.font='times';
  document.getElementById('title').style.color= 'purple';
  document.getElementById('title').style.fontWeight="bold";
  document.body.style.backgroundColor= changeInColor;
  

  
}

window.onload=start;
