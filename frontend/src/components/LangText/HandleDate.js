const englishMonths = [
  'empty', 
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]
const spanishMonths = [
  'empty', 
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre'
]

export const formatSpanishDate = (date) => {
  let year = date.slice(0,4);
  let month = date.slice(5,7);
  let day = date.slice(8,10)

  if (month[0] === '0') {
    month = spanishMonths[month[1]];
  } else {
    month = spanishMonths[month]
  }

  return `${day} ${month} ${year}`;
}

export const formatEnglishDate = (date) => {
  let year = date.slice(0,4);
  let month = date.slice(5,7);
  let day = date.slice(8,10)

  if (month[0] === '0') {
    month = englishMonths[month[1]];
  } else {
    month = englishMonths[month]
  }

  return `${month} ${day} ${year}`;
}