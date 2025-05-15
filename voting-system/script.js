const poll = new Map();

function addOption(option){
  const isNotEmpty = option !== undefined;
  if(!isNotEmpty){
    return "Option cannot be empty."
  }
  if(!poll.has(option)){
    poll.set(option, new Set())
    return `Option "${option}" added to the poll`
  } else if(poll.has(option)){
    return `Option "${option}" already exists`
  }


}

addOption("Norway");
addOption("Sweden");
addOption("Denmark");

function vote(option, voterId) {
  if(!poll.has(option)){
    return `Option ${option} does not exist.`
  }

  const currentOption = poll.get(option);
  if(currentOption.has(voterId)){
    return `Voter ${voterId} has already voted for ${option}`
  }

  currentOption.add(voterId);
  return `Voter ${voterId} voted for "${option}"`
}


console.log(vote("Norway", 123))
console.log(vote("Norway", 456))
console.log(vote("Sweden", 123))

function displayResults(){
  let resultsString = '';
  poll.forEach((key, value) => {
    const entries = key.values().

    resultsString += `${value}: ${entries} \n`
  })

  return resultsString;
}

console.log(displayResults());