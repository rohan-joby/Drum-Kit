//to handle keyboard input
function handleKeydown(e) {
  const key = document.querySelector(`.key[data-key = "${e.code}"]`);
  const audio = document.querySelector(`.sound[data-key = "${e.code}"]`);

  if (!audio) {
    //exit if any other button is pressed.
    return;
  }
  playSound(audio, key); //function to play drum kit sound
}

function handleClick(e) {
  const keyElement = e.target.closest(".key");
  const dataKey = keyElement.getAttribute("data-key");

  const button = document.querySelector(`.key[data-key = ${dataKey}]`);
  const audio = document.querySelector(`.sound[data-key = "${dataKey}"]`);

  if (!keyElement) {
    return;
  }
  if (!audio) {
    return;
  } //exit if any other button is pressed.
  playSound(audio, button); //function to play drum kit sound
  e.preventDefault();
}

function playSound(audio, key) {
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing"); //for animation
}

document.addEventListener("keydown", handleKeydown); //listening for key press

document.addEventListener("click", handleClick); //listening for button click
document.addEventListener("touchend", handleClick, false); //for touchscreens, "click" event does not work on Safari if the element is not "clickable"

//need to loop over NodeList to add Event Listener to listen for end of animation
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", endTransition));

//to handle end of transition
function endTransition(e) {
  if ((e.propertyName = "transform")) {
    this.classList.remove("playing");
  }
}
