const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", convertMarkdown)

//TODO -> Nå er du på riktig spor. Bare skriv resten av regexene, for så å legge inn en replace all på alt. Så kjør en code-review m. GPT. 

const h1Reg = /^ *#{1} (.+)/igm;
const h2Reg = /^ *#{2} (.+)/igm;
const h3Reg = /^ *#{3} (.+)/igm;


function convertMarkdown(){
  const input = markdownInput.value
    .replaceAll(h1Reg, "<h1>$1</h1>")
    .replaceAll(h2Reg, "<h2>$1</h2>")
    .replaceAll(h3Reg, "<h3>$1</h3>")


  preview.innerHTML = input;
  htmlOutput.innerText = input;

  return input;
}
