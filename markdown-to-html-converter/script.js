const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", convertMarkdown)
//
const h1Reg = /^ *#{1} (.+)/igm;
const h2Reg = /^ *#{2} (.+)/igm;
const h3Reg = /^ *#{3} (.+)/igm;
const boldReg = /[*]{2}(.+)[*]{2}/ig;
const boldReg2 = /[_]{2}(.+)[_]{2}/ig;
const italicReg = /[*]{1}(.+)[*]{1}/ig;
const italicReg2 = /[_]{1}(.+)[_]{1}/ig;
const imgReg = /!\[([^\]]+)\]\(([^\)]+)\)/ig;
const linkReg = /\[([^\]]+)\]\(([^\)]+)\)/ig;
const quoteReg = /(?<!.+)\> (.+)/ig;


console.log(quoteReg.test("this > this "))
console.log("![hello](img-source)".match(imgReg))

//På sikt, kanskje refactor denne så du ikke skriver replaceAll så mange ganger... 

function convertMarkdown(){
  const input = markdownInput.value
    .replaceAll(h1Reg, "<h1>$1</h1>")
    .replaceAll(h2Reg, "<h2>$1</h2>")
    .replaceAll(h3Reg, "<h3>$1</h3>")
    .replaceAll(boldReg, "<strong>$1</strong>")
    .replaceAll(boldReg2, "<strong>$1</strong>")
    .replaceAll(italicReg, "<em>$1</em>")
    .replaceAll(italicReg2, "<em>$1</em>")
    .replaceAll(imgReg,`<img alt="$1" src="$2">`)
    .replaceAll(linkReg,`<a href="$2">$1</a>`)
    .replaceAll(quoteReg, "<blockquote>$1</blockquote>")



  preview.innerHTML = input;
  htmlOutput.innerText = input;

  return input;
}

