
//document.addEventListener("keydown", keyboardInfo); 
//document.addEventListener("keypress", keyboardInfo); 
let fsize =     30;
//let fsize = parseFloat( document.getElementById('balloon').style.fontSize )
//console.log(fsize);
document.documentElement.style.setProperty('--balloon-font-size', fsize+'px');
const balloon = document.getElementById('balloon')

const resizeBalloon = e => {

  if (fsize <= 60 && fsize > 0 ){
  
  if (e.code === 'KeyI')  {
    console.log(`I pressed: ${e.type}, key: ${e.key}, code: ${e.code}`); 
    

    console.log(fsize);
    fsize = fsize + 10;
    document.documentElement.style.setProperty('--balloon-font-size', fsize+'px');

  }
  else if (e.code === 'KeyD') {
    console.log(`D pressed: ${e.type}, key: ${e.key}, code: ${e.code}`);  
    fsize = fsize - 10;
    document.documentElement.style.setProperty('--balloon-font-size', fsize+'px');
  }
}
}

function CheckTransition (){
    //alert('Transition check triggered')
if (fsize <= 0 ) {
    balloon.classList.remove("slowtransition") 
    balloon.innerHTML ="Done";
    document.removeEventListener("keyup",resizeBalloon)
    document.documentElement.style.setProperty('--balloon-font-size', '30px');

}
else if ( fsize > 60) { 
    balloon.innerHTML ="💥";
    document.removeEventListener("keyup",resizeBalloon)


}}

document.addEventListener("keyup", resizeBalloon);
balloon.addEventListener("transitionend", CheckTransition)




