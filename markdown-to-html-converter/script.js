const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", convertMarkDown)

const h1Reg = /(?:^|\s)[#]{1}\s/i;
const h2Reg = /(?:^|\s)[#]{2}\s/i;
const h3Reg = /(?:^|\s)[#]{3}\s/i;

const regexArray = [h1Reg, h2Reg, h3Reg];
const markupArray = [
  {
    open: "<h1>",
    close:"</h1>"
  },
  {
    open: "<h2>",
    close: "</h2>"
  },
  {
    open: "<h3>",
    close: "</h3>"
  }
];


//Checks if anythings matches the different regexes, if so, returns the index of the matched regex.
function testRegex(input) {
  let i;
  const isMatch = regexArray.some((regex, index) => {
    i = index;
    return regex.test(input);
    }
  )
  if(isMatch){
    return i;
  } else {
    return "No match found"
  }
}


function convertMarkDown(){
  const input = markdownInput.value
  const regexNumber = testRegex(input);

  preview.innerHTML = input;
  htmlOutput.textContent = input;
  
  //TODO: Find a solution to how to place the closing tag, and how to make it stay after a linebreak.

  if(typeof regexNumber === "number"){
    const replaceRegex = input.replace(regexArray[regexNumber], markupArray[regexNumber].open) + markupArray[regexNumber].close
    preview.innerHTML = replaceRegex;
    htmlOutput.textContent = replaceRegex;
  }
}




//console.log(regex.test("# "))
//console.log(convert("##"))
//console.log(h1Reg.test("# "))