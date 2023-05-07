

function generatePESEL(x) {
    // losowy rok urodzenia
    const year = Math.floor(Math.random() * (99 - 30 + 1)) + 30; // 30-99
  
    // losowy miesiąc urodzenia
    const month = Math.floor(Math.random() * 12) + 1; // 1-12
  
    // losowy dzień urodzenia
    let day = Math.floor(Math.random() * 31) + 1; // 1-31
    // jeśli miesiąc jest luty, zredukuj do 28 dni
    if (month === 2) {
      day = Math.min(day, 28);
    }
    // jeśli miesiąc ma 30 dni, zredukuj do 30 dni
    else if ([4, 6, 9, 11].includes(month)) {
      day = Math.min(day, 30);
    }
  
    // losowa seria
    const series = Math.floor(Math.random() * 999) + 1; // 001-999
    const sex = getRandomInt(0, 9);
    const prePesel = String(year).padStart(2, '0') + String(month).padStart(2, '0') + String(day).padStart(2, '0') + String(series).padStart(3, '0') + String(sex)
    const techPeselVariable = 1 * prePesel[0] + 3 * prePesel[1] + 7 * prePesel[2] + 9 * prePesel[3] + 1 * prePesel[4] + 3 * prePesel[5] + 7 * prePesel[6] + 9 * prePesel[7] + 1 * prePesel[8] + 3 * prePesel[9];
    let techPeselVariable2 = techPeselVariable % 10;
    techPeselVariable2 = 10 - techPeselVariable2
    let lastDigitPesel 
    if (techPeselVariable2 == 10) {
      lastDigitPesel = "0"
    }
    else {
      lastDigitPesel = String(techPeselVariable2)
    }
    // złożenie wszystkich elementów numeru PESEL
    let pesel = prePesel + lastDigitPesel
    document.getElementById(x).value = pesel   
  //  return pesel;
    
  }
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateManyPESEL() {
  for (let i = 1; i < 6; i++) {
    x = "PESEL" + i
    generatePESEL(x)
  }

}
function padWithLeadingZeros(number, length) {
  number = "" + number;
  var zerosNumber = length - number.length;

  for (i = 0; i < zerosNumber; i++) {
      number = "0" + number;
  }
  return number;
}


function generateRandomIBAN(x) {
  // Country code and check digits for IBAN numbers
  const ibanPrefixes = [
    "AL", "AD", "AT", "AZ", "BH", "BE", "BA", "BR", "BG", "CR",
    "HR", "CY", "CZ", "DK", "DO", "EE", "FO", "FI", "FR", "GE",
    "DE", "GI", "GR", "GL", "GT", "HU", "IS", "IE", "IL", "IT",
    "JO", "KZ", "XK", "KW", "LV", "LB", "LI", "LT", "LU", "MK",
    "MT", "MR", "MU", "MD", "MC", "ME", "NL", "NO", "PK", "PS",
    "PL", "PT", "RO", "SM", "SA", "RS", "SK", "SI", "ES", "SE",
    "CH", "TN", "TR", "UA", "AE", "GB", "VG"
  ];

  // Select a random country code
  const countryCode = ibanPrefixes[Math.floor(Math.random() * ibanPrefixes.length)];

  // Generate random digits for the rest of the IBAN number
  let ibanDigits = "";
  for (let i = 0; i < 22; i++) {
    ibanDigits += Math.floor(Math.random() * 10);
  }

  // Concatenate the country code and IBAN digits, and insert check digits countryCode +
  const iban =  "00" + ibanDigits;
  const checkDigits = BigInt(98) - (BigInt(iban) % 97n);
   
  document.getElementById(x).value = countryCode + checkDigits.toString().padStart(2, "0") + ibanDigits; 
}
function generateManyIBAN() {
  for (let i = 1; i < 6; i++) {
    x = "IBAN" + i
    
    generateRandomIBAN(x)
  }
}


function generateREGON(x) {

    let provinceCode = padWithLeadingZeros((2 * getRandomInt(0, 48) + 1), 2)
    let randREGON = padWithLeadingZeros((getRandomInt(0, 999999)),6)
    let techRegonSum = provinceCode + randREGON
    const weights = [8, 9, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      sum += Number(techRegonSum.charAt(i)) * weights[i];
    }
    const controlNum = sum % 11;
    const controlDigit = controlNum === 10 ? 0 : controlNum;

    let stringControlDIgit = controlDigit.toString()
    let regon = provinceCode + randREGON + stringControlDIgit

    document.getElementById(x).value = regon

  }  

function generateManyREGON() {
    for (let i = 1; i < 6; i++) {
      x = "REGON" + i
      generateREGON(x)
    }  
  }

function generateIdCardNumber(x) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let letterValues = {
    "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20,
    "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31,
    "W": 32, "X": 33, "Y": 34, "Z": 35}
  
    let lettersPart = "";
    for (let i = 0; i < 3; i++) {
        let randomLetter = letters[getRandomInt(0, 25)];
        lettersPart = lettersPart + randomLetter;
    }
    let randomIntX = getRandomInt(0, 99999);
    randomIntX = "" + padWithLeadingZeros(randomIntX, 5);

    let controlSum =  7 * letterValues[lettersPart[0]] + 3 * letterValues[lettersPart[1]] + 1 * letterValues[lettersPart[2]] +
        7 * randomIntX[0] + 3 * randomIntX[1] + 1 * randomIntX[2] + 7 * randomIntX[3] + 3 * randomIntX[4];
    let controlSumLastDigit = controlSum % 10;
    let newIdNumberValue = lettersPart + controlSumLastDigit + randomIntX
    document.getElementById(x).value = newIdNumberValue
   
}

function generateManyIdCardNumber() {
  for (let i = 1; i < 6; i++) {
    x = "NDO" + i
    generateIdCardNumber(x)
  }  
}    

  function generateNIP(x) {
    // losowa 9-cyfrowa liczba
    const randomNum = String(Math.floor(Math.random() * 1000000000)).padStart(9, '0');
  
    // obliczenie cyfry kontrolnej na podstawie wag
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += Number(randomNum.charAt(i)) * weights[i];
    }
    const controlNum = sum % 11;
    const controlDigit = controlNum === 10 ? 0 : controlNum;
  
    // złożenie wszystkich elementów numeru NIP
    const nip = randomNum + controlDigit;
    document.getElementById(x).value = nip

  }  
  function generateManyNIP() {
    for (let i = 1; i < 6; i++) {
      x = "NIP" + i
      generateNIP(x)
    }  
  }    

function generateRandomEmail() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomString = Math.random().toString(36).substr(2, 8);
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    const domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'][Math.floor(Math.random() * 5)];
    return randomString + randomLetter + '@' + domain;
  }
  
  function konwertujNaHex(str) {
    var hex = '';
    for(var i = 0; i < str.length; i++) {
      hex += str.charCodeAt(i).toString(16);
    }
    return hex;
  }  
 
//funkcje tekstowe

function makeItSmall() {
  
  document.getElementById('toGreatEnd').value = document.getElementById('toGreatStart').value.toLowerCase()

}

function makeItBig() {
  
  document.getElementById('toGreatEnd').value = document.getElementById('toGreatStart').value.toUpperCase()

}

//ilość znaków
function countLetters(){
  document.getElementById('countTotal').innerHTML = "Całkowita liczba znaków: " + document.getElementById('countTextArea').value.length
  document.getElementById('countNoSpaces').innerHTML = "Liczba znaków bez spacji: " +  document.getElementById('countTextArea').value.replace(/\s+/g, '').length
  
}

function countWords() { 
  document.getElementById('counterWords').innerHTML = "Całkowita liczba słów: " + document.getElementById('countWordsArea').value.split(" ").length
}
  
//ilość słów countWords(text);

//odwróć słowa
function reverseString() {
  let str = document.getElementById('reverseStart').value
  // Split the string into an array of characters, reverse the array, and join the characters back into a string
  document.getElementById('reverseEnd').value = str.split('').reverse().join('');
}

//
function textToHex() {
  let text = document.getElementById('textToHexStart').value
  let hex = '';
  for (let i = 0; i < text.length; i++) {
    // Get the character code for each character and convert it to a hexadecimal string
    const charCode = text.charCodeAt(i).toString(16);
    // Add the hexadecimal string to the result, padded with zeros if necessary
    hex += ('00' + charCode).slice(-2);
  }
  document.getElementById('textToHexEnd').value = hex
}

function tekstNaBinarny() {
  let tekst = document.getElementById('textToBinaryStart').value
  let wynik = '';
  
  for (let i = 0; i < tekst.length; i++) {
    const znakBinarny = tekst[i].charCodeAt().toString(2);
    wynik += znakBinarny.padStart(8, '0'); // Dodajemy zera do przodu, jeśli liczba binarna ma mniej niż 8 cyfr
  }
  
  document.getElementById('textToBinaryEnd').value = wynik
}

function hexToText(hex) {
  let text = '';
  for (let i = 0; i < hex.length; i += 2) {
    // Get two characters at a time from the hexadecimal string
    const hexChars = hex.substr(i, 2);
    // Convert the two hexadecimal characters to a character code and add the corresponding character to the result
    const charCode = parseInt(hexChars, 16);
    text += String.fromCharCode(charCode);
  }
  return text;
}

//walidacje
function checkPESEL() {
  document.getElementById('succesPesel').hidden = true
  let pesel = String(document.getElementById('peselToValidate').value)
  // Sprawdzenie długości numeru PESEL
  if (pesel.length !== 11) {
    document.getElementById('dateFromPesel').value = "Nieprawidłowa długość numeru PESEL"
    return "Nieprawidłowa długość numeru PESEL";
  }

  // Sprawdzenie sumy kontrolnej numeru PESEL
  var weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    sum += weights[i] * parseInt(pesel.charAt(i));
  }
  var controlNumber = (10 - (sum % 10)) % 10;
  if (controlNumber !== parseInt(pesel.charAt(10))) {
    document.getElementById('dateFromPesel').value = "Nieprawidłowy numer PESEL"
    return "Nieprawidłowy numer PESEL";
  }
  document.getElementById('succesPesel').hidden = false
  succesPesel
  // Wyznaczenie daty urodzenia na podstawie numeru PESEL
  var year = parseInt(pesel.substr(0, 2));
  var month = parseInt(pesel.substr(2, 2)) - 1;
  var day = parseInt(pesel.substr(4, 2));
  if (month > 80) {
    year += 1800;
    month -= 80;
  } else if (month > 60) {
    year += 2200;
    month -= 60;
  } else if (month > 40) {
    year += 2100;
    month -= 40;
  } else if (month > 20) {
    year += 2000;
    month -= 20;
  } else {
    year += 1900;
  }
  if (pesel[10] % 2 == 0) {
    document.getElementById('sexFromPesel').value = "Kobieta"
  }
  else {
    document.getElementById('sexFromPesel').value = "Mężczyzna"
  }
  // Tworzenie obiektu daty na podstawie wyznaczonej daty urodzenia
  var birthDate = new Date(year, month, day+1).toISOString().slice(0, 10);
  document.getElementById('dateFromPesel').value = birthDate 
}  

function generateFakePerson() {
  

  generatePESEL("fakePESEL")
  let fakePESEL = document.getElementById("fakePESEL").value
  let fakeSex
  if (fakePESEL[10] % 2 == 0) {
    fakeSex = 1
  }
  else {
    fakeSex = 0
  }  
  let firstName, lastName;
  if (fakeSex === 1) {
    firstName = namesFemale[Math.floor(Math.random() * namesFemale.length)];
    lastName = surnamesFemale[Math.floor(Math.random() * surnamesFemale.length)];
  
  } else {
    firstName = namesMale[Math.floor(Math.random() * namesMale.length)];
    lastName = surnamesMale[Math.floor(Math.random() * surnamesMale.length)];
  }

  document.getElementById('fakeFirstName').value = firstName
  document.getElementById('fakeLastName').value = lastName
  var year = parseInt(fakePESEL.substr(0, 2));
  var month = parseInt(fakePESEL.substr(2, 2)) - 1;
  var day = parseInt(fakePESEL.substr(4, 2));
  if (month > 80) {
    year += 1800;
    month -= 80;
  } else if (month > 60) {
    year += 2200;
    month -= 60;
  } else if (month > 40) {
    year += 2100;
    month -= 40;
  } else if (month > 20) {
    year += 2000;
    month -= 20;
  } else {
    year += 1900;
  }
  
  var birthDateFake = new Date(year, month, day+1).toISOString().slice(0, 10);
  document.getElementById('fakeDate').value = birthDateFake
   generateRandomIBAN("fakeIBAN")
   generateREGON("fakeREGON")
   generateIdCardNumber("fakeNDO")
   generateNIP("fakeNIP")
   document.getElementById('fakeEmail').value = generateRandomEmail()
   document.getElementById('fakePhoneNumber').value = String(Math.floor(Math.random() * 1000000000)).padStart(9, '0');

}

function convertTemperature(value, fromScale, toScale) {
  let result;

  switch (fromScale.toLowerCase()) {
    case 'c':
    case 'celsius':
      switch (toScale.toLowerCase()) {
        case 'c':
        case 'celsius':
          result = value;
          break;
        case 'k':
        case 'kelvin':
          result = value + 273.15;
          break;
        case 'f':
        case 'fahrenheit':
          result = (value * (9/5)) + 32;
          break;
        case 'r':
        case 'rankine':
          result = (value + 273.15) * (9/5);
          break;
        default:
          throw new Error(`Invalid to scale: ${toScale}`);
      }
      break;
    case 'k':
    case 'kelvin':
      switch (toScale.toLowerCase()) {
        case 'c':
        case 'celsius':
          result = value - 273.15;
          break;
        case 'k':
        case 'kelvin':
          result = value;
          break;
        case 'f':
        case 'fahrenheit':
          result = (value - 273.15) * (9/5) + 32;
          break;
        case 'r':
        case 'rankine':
          result = value * (9/5);
          break;
        default:
          throw new Error(`Invalid to scale: ${toScale}`);
      }
      break;
    case 'f':
    case 'fahrenheit':
      switch (toScale.toLowerCase()) {
        case 'c':
        case 'celsius':
          result = (value - 32) * (5/9);
          break;
        case 'k':
        case 'kelvin':
          result = (value - 32) * (5/9) + 273.15;
          break;
        case 'f':
        case 'fahrenheit':
          result = value;
          break;
        case 'r':
        case 'rankine':
          result = value + 459.67;
          break;
        default:
          throw new Error(`Invalid to scale: ${toScale}`);
      }
      break;
    case 'r':
    case 'rankine':
      switch (toScale.toLowerCase()) {
        case 'c':
        case 'celsius':
          result = (value - 491.67) * (5/9);
          break;
        case 'k':
        case 'kelvin':
          result = value * (5/9);
          break;
        case 'f':
        case 'fahrenheit':
          result = value - 459.67;
          break;
        case 'r':
        case 'rankine':
          result = value;
          break;
        default:
          throw new Error(`Invalid to scale: ${toScale}`);
      }
      break;
    default:
      throw new Error(`Invalid from scale: ${fromScale}`);
  }
  
  return Number(result.toFixed(2));
}
function convertCel() {
  document.getElementById('invalidTemperature').hidden = true
  let temperatureCelcius = Number(document.getElementById('valueCelsius').value)

  if (temperatureCelcius < -273.15) {
    document.getElementById('invalidTemperature').hidden = false
    return  
  }

  document.getElementById('valueFarenheit').value = convertTemperature(temperatureCelcius, "c", "f")
  document.getElementById('valueRankine').value = convertTemperature(temperatureCelcius, "c", "r")
  document.getElementById('valueKelvin').value = convertTemperature(temperatureCelcius, "c", "k")

}
function convertFar() {
  document.getElementById('invalidTemperature').hidden = true

  let temperatureFarenheit = Number(document.getElementById('valueFarenheit').value)
  if (temperatureFarenheit < -459.67) {
    document.getElementById('invalidTemperature').hidden = false
    return  
  }
  document.getElementById('valueCelsius').value = convertTemperature(temperatureFarenheit, "f", "c")
  document.getElementById('valueRankine').value = convertTemperature(temperatureFarenheit, "f", "r")
  document.getElementById('valueKelvin').value = convertTemperature(temperatureFarenheit, "f", "k")

}
function convertKel() {
  
  document.getElementById('invalidTemperature').hidden = true
  let temperatureKelvin = Number(document.getElementById('valueKelvin').value)
  if (temperatureKelvin < 0) {
    document.getElementById('invalidTemperature').hidden = false
    return  
  }
  document.getElementById('valueFarenheit').value = convertTemperature(temperatureKelvin, "k", "f")
  document.getElementById('valueRankine').value = convertTemperature(temperatureKelvin, "k", "r")
  document.getElementById('valueCelsius').value = convertTemperature(temperatureKelvin, "k", "c")

}
function convertRan() {
  document.getElementById('invalidTemperature').hidden = true
  let temperatureRankine = Number(document.getElementById('valueRankine').value)
  if (temperatureRankine < 0) {
    document.getElementById('invalidTemperature').hidden = false
    return  
  }
  document.getElementById('valueFarenheit').value = convertTemperature(temperatureRankine, "r", "f")
  document.getElementById('valueCelsius').value = convertTemperature(temperatureRankine, "r", "c")
  document.getElementById('valueKelvin').value = convertTemperature(temperatureRankine, "r", "k")

}
//wywoływacze

if (document.getElementById("PESEL1"))
window.addEventListener("load", 

  generateManyPESEL()
)

if (document.getElementById("REGON1"))
window.addEventListener("load", 

  generateManyREGON()
  
)

if (document.getElementById("IBAN1"))
window.addEventListener("load", 

  generateManyIBAN()
  
)

if (document.getElementById("NDO1"))
window.addEventListener("load", 

  generateManyIdCardNumber()
  
)

if (document.getElementById("NIP1"))
window.addEventListener("load", 

generateManyNIP()
  
)


if (document.getElementById("succesPesel"))
window.addEventListener("load", 

document.getElementById('succesPesel').hidden = true
  
)


if (document.getElementById("invalidTemperature"))
window.addEventListener("load", 

document.getElementById('invalidTemperature').hidden = true
  
)


if (document.getElementById("fakePESEL"))
window.addEventListener("load", 

  
  generateFakePerson()
)





































