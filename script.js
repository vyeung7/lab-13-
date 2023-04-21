function start(){
    var button=document.getElementById('press');
    button.onclick=change;
    button.onclick=validateField;
    document.body.style.textAlign= 'center';
}

function change(){
   var changeInColor= 'pink';


  document.getElementById('title').style.fontSize='40px';
  document.getElementById('title').style.font='times';
  document.getElementById('title').style.color= 'purple';
  document.getElementById('title').style.fontWeight="bold";
  document.body.style.backgroundColor= changeInColor;
  
}

function validateField() {

    var docs = document.getElementById("img");
    docs.setAttribute("src", "gif_path");
    
    }


window.onload=start;
