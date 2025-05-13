const drumPads = document.querySelectorAll(".drum-pad");
drumPads.forEach((pad) => pad.addEventListener("click", playClip))
const display = document.getElementById("display");
document.addEventListener("keydown", playClipOnKeyDown)





function playClip(e){
  const pad = e.target
  const audioElements = pad.getElementsByTagName("audio")
  for (const element of audioElements) {
    display.innerText = pad.id;
    element.play()
  }
}


function playClipOnKeyDown(e){
  let key = e.key
  const regex = /[qweasdzxc]/i
  if(regex.test(key)){
      const audioElement = document.getElementById(key.toUpperCase())
      audioElement.currentTime = 0;
      display.innerText = audioElement.parentElement.id
      audioElement.play()
  }
}

