//to handle keyboard input
function handleKeydown(e) {
  const key = document.querySelector(`.key[data-key = "${e.code}"]`);
  const audio = document.querySelector(`.sound[data-key = "${e.code}"]`);

  //exit if any other button is pressed.
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  //for animation
  key.classList.add("playing");
}

function handleMousedown(e){
  console.log(e);
}

//to handle end of transition
function endTransition(e) {
  if ((e.propertyName = "transform")) {
    this.classList.remove("playing");
  }
}

//listening for key press
document.addEventListener("keydown", handleKeydown);

//listening for button click
document.addEventListener("mousedown",handleMousedown);

//need to loop over NodeList to add Event Listener to listen for end of animation
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", endTransition));
