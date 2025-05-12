const drumPads = document.querySelectorAll(".drum-pad").forEach((pad) => pad.addEventListener("click", playClip))

const audio = new Audio();



function playClip(e){
  const pad = e.target
  console.log(pad)
  const audioElements = pad.getElementsByTagName("audio")
  console.log(audioElements)
  for (const element of audioElements) {
    const src = element.getAttribute("src")
    console.log(src)
    audio.src = src;
  }
  audio.play()
}

