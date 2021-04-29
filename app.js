document.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-key = "${e.code}"]`);
  console.log(e);
  key.classList.toggle("playing");
});
