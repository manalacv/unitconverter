/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value)
    
    lengthEl.textContent = `${baseValue} Meter = ${(baseValue * meterToFeet).toFixed(3)} Feet | ${(baseValue * meterToFeet).toFixed(3)} Feet = ${baseValue} Meter` 
    volEl.textContent = `${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${(baseValue * literToGallon).toFixed(3)} Gallons = ${baseValue} Liters` 
    massEl.textContent = `${baseValue} Kilos = ${(baseValue * kiloToPound).toFixed(3)} Pounds | ${(baseValue * kiloToPound).toFixed(3)} Pounds = ${baseValue} Kilos` 
})

