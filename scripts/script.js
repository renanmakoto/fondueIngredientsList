let inputAdults = document.getElementById("adults")
let inputKids = document.getElementById("kids")
let inputDuration = document.getElementById("duration")

let result = document.getElementById("result")

function calculate() {
    console.log("Calculating...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;


    let qtTotalBaguette = baguettePP(duration) * adults + (baguettePP(duration) / 2 * kids);
    let qtTotalCheese = cheesePP(duration) * adults + (cheesePP(duration) / 2 * kids);
    let qtTotalWine = winePP(duration) * adults;
    

    result.innerHTML = `
    <div class="resultDiv">
    <img src="./assets/baguette.png">
    <p>${qtTotalBaguette / 2500} Kg of baguette.</p>
    </div>
    `
    
    
    result.innerHTML += `
    <div class="resultDiv">
    <img src="./assets/parmesan.png">
    <p>${Math.ceil(qtTotalCheese / 3000)} Kg of cheese.</p>
    </div>
    `
    
    
    result.innerHTML += `
    <div class="resultDiv">
    <img src="./assets/wine-bottle.png">
    <p>${Math.ceil(qtTotalWine / 20000)} litre(s) of wine (adults only).</p>
    </div>
    `
    

}

function baguettePP(duration) {
    if (duration >= 2) {
        return 650;
    } else {
        return 400;
    }
}

function cheesePP(duration) {
    if (duration >= 2) {
        return 500;
    } else {
        return 1000;
    }
}
function winePP(duration) {
    if (duration >= 2) {
        return 2000;
    } else {
        return 1500;
    }
}
