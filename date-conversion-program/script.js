const currentDate = new Date();
const testDate = new Date("Fri Sep 27 2024 16:16:11 GMT+0500")

const currentDateFormat = `Current Date and Time: ${currentDate}`

console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
  const mmddyyy = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${mmddyyy}`
}

console.log(formatDateMMDDYYYY(currentDate))

function formatDateLong(date){
 const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const monthDayYear = date.toLocaleDateString("en-US", options)
  return `Formatted Date (Month Day, Year): ${monthDayYear}`
}

console.log(formatDateLong(testDate))

