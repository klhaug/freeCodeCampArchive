const poll = new Map();

function addOption(option){
  const isNotEmpty = option !== undefined;
  if(!isNotEmpty || option.length === 0){
    return "Option cannot be empty."
  }
  if(!poll.has(option)){
    poll.set(option, new Set())
    return `Option "${option}" added to the poll.`
  } else if(poll.has(option)){
    return `Option "${option}" already exists.`
  }


}

console.log(addOption("Egypt"))
addOption("Norway");
addOption("Sweden");
addOption("Denmark");

function vote(option, voterId) {
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`
  }

  const currentOption = poll.get(option);
  if(currentOption.has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }

  currentOption.add(voterId);
  return `Voter ${voterId} voted for "${option}".`
}


vote("Norway", 123)
vote("Norway", 456)
vote("Sweden", 123)

function displayResults(){

  let resultsString = 'Poll Results:';
  poll.forEach((key, value) => {
    const entries = key.size
    resultsString += `\n${value}: ${entries} votes`
  })

  return resultsString;
}

console.log(displayResults());



