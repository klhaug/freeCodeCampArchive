const heading = document.querySelector(".test-container");

heading.addEventListener("click", myFunction)


function myFunction(e) {
    // Get the text field
    console.log(e.target)
    const textContent = e.target.textContent
    console.log(textContent)
     // Copy the text inside the text field
    navigator.clipboard.writeText(textContent);
    e.target.innerHTML += (`<div class="copied">text copied</div>`)
  }