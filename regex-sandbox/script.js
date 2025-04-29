const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


testButton.addEventListener("click", testRegex);

function getFlags(){
  let flags = "";
  if(caseInsensitiveFlag.checked) {
    flags += "i"
  }
  if(globalFlag.checked){
    flags += "g";
  }
  return flags;
}

function testRegex(){
  const regex = new RegExp(regexPattern.value, getFlags());
  let getString = stringToTest.textContent;
  const isFound = getString.match(regex);
  console.log(isFound)
  if(isFound){
    isFound.forEach((match) => getString.replace(match, `its working`))
  }
  stringToTest.innerHTML = getString;


}

