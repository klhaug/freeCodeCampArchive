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

function replacer(match) {
  return `<span class="highlight">${match}</span>`
}

function testRegex(){
  const regex = new RegExp(regexPattern.value, getFlags());
  let getString = stringToTest.textContent;
  const isFound = getString.match(regex);
  if(isFound){
    const newString = getString.replace(regex, replacer);
    stringToTest.innerHTML = newString;
    testResult.textContent = isFound.join(", ");
  } else {
    testResult.textContent = "no match"
  }

}

