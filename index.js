let inputNumber = document.getElementById("input-number")
let generateBtn = document.getElementById("generate")
let lengthField = document.getElementById("length")
let volumeField = document.getElementById("volume")
let massField = document.getElementById("mass")

generateBtn.addEventListener("click", function () {
    const value = inputNumber.value;

    const lengthContainer = `
        <li><mark>${value} Meters</mark> = ${(value * 3.281).toFixed(3)} Feet</li>
        <li><mark>${value} Feet</mark> = ${(value / 3.281).toFixed(3)} Meters </li>
    `

    const volumeContainer = `
         <li><mark>${value} Litres</mark> = ${(value / 3.785).toFixed(3)} Gallons</li> 
         <li><mark>${value} Gallons</mark>  = ${(value * 3.785).toFixed(3)} Litres</li>
    `

    const massContainer = `
         <li><mark>${value} Kg's</mark> = ${(value * 2.204).toFixed(3)} Pounds</li>
        <li><mark>${value} Pounds</mark>  = ${(value / 2.204).toFixed(3)} Kg</li>
    `

    lengthField.innerHTML = lengthContainer;
    volumeField.innerHTML = volumeContainer;
    massField.innerHTML = massContainer;
});

//20 meters = 65.616 feet | 20 feet = 6.096 meters

// person types value into inputNumber field
// person clicks generate buttonr
// generate reads the input value and converts it to the metric 

// the metric is rendered out to length, volume and mass 


//1 meter = 3.281 feet
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound


