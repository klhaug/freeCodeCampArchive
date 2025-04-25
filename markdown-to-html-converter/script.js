const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", convertMarkDown)

const regex = /(?:^|\s)[#]{1,3}\s/i;



function convertMarkDown(){
  console.log(markdownInput.value)
  
}


console.log(regex.test("# "))