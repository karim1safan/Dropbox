window.addEventListener("keydown", function (e) {
  // console.log(e.keyCode);

  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // console.log(key);

  if (!audio) return; // stop the function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName != "transform") return; // skip it if isn't not a transform
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
