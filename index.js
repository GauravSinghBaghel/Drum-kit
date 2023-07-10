var numberOfDrums = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfDrums; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick(){
  var X = this.innerHTML;
  makeSound(X);

}
document.addEventListener("keydown", function(Event){
  makeSound(Event.key);
})
function makeSound(key){
  switch (key) {
    case "w":
      var audiow = new Audio('sounds/crash.mp3');
      audiow.play();
      break;
    case "a":
      var audioa = new Audio('sounds/kick-bass.mp3');
      audioa.play();
      break;
    case "s":
      var audios = new Audio('sounds/snare.mp3');
      audios.play();
    case "d":
      var audiod = new Audio('sounds/tom-1.mp3');
      audiod.play();
    case "j":
      var audioj = new Audio('sounds/tom-2.mp3');
      audioj.play();
    case "k":
      var audiok = new Audio('sounds/tom-3.mp3');
      audiok.play();
    case "l":
      var audiol = new Audio('sounds/tom-4.mp3');
      audiol.play();
    default:
      break;
  }

}