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

function handleClick() {
  const dataKey = this.dataset.key; //datset is a DOMStringMap containing all the element's keys

  const button = document.querySelector(`.key[data-key = ${dataKey}]`);
  const audio = document.querySelector(`.sound[data-key = "${dataKey}"]`);

  if (!dataKey) {
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

const keyset = document.querySelectorAll(".key");
keyset.forEach((key) => key.addEventListener("click", handleClick)); //listening for button click
keyset.forEach((key) => key.addEventListener("touchend", handleClick, false)); //for touchscreens, "click" event does not work on Safari if the element is not "clickable"

//need to loop over NodeList to add Event Listener to listen for end of animation
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", endTransition));

//to handle end of transition
function endTransition(e) {
  if ((e.propertyName = "transform")) {
    this.classList.remove("playing");
  }
}

/*Implementation (2nd method) for handleClick(e) 

Another method to get required dataKey if we add Event Listener to entire document
  const keyElement = e.target.closest(".key");
  const dataKey = keyElement.getAttribute("data-key");
  
Adding Event Listeners to document  
  document.addEventListener("click", handleClick); //listening for button click
  document.addEventListener("touchend", handleClick, false); //for touchscreens, "click" event does not work on Safari if the element is not "clickable"
*/

/*  The issue wuth second method is that it produces an error " Can not read property 'getAttribute' of null"
 when we click ANYWHERE other than the buttons on screen.
 */
