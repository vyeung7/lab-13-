function start(){
    var button=document.getElementById('press');
    button.onclick=change;
    document.body.style.textAlign= 'center';
    //centered text and button
}

function change(){
   var changeInColor= 'pink';
//new background color and fontweight
  document.getElementById('title').style.fontSize='40px';
  document.getElementById('title').style.font='times';
  document.getElementById('title').style.color= 'purple';
  document.getElementById('title').style.fontWeight="bold";
  document.body.style.backgroundColor= changeInColor;
  //add hello kitty gif
    var button=document.getElementById("img");
  button.setAttribute("src", "kitty.gif");

}

window.onload=start;
