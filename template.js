function getTodayTemplate(){
    return `
    <p><b>${today.toLocaleDateString("de-DE")}</b></p>
    `
}

function getDrivenKilometersTemplate(){
    return `
        <h3>verbrauchte Kilometer</h3>
        <p>${drivenKm}</p>
    `
}

function getRemainingKilometersTemplate(){
    return `
    <h3>verbleibende Kilometer</h3>
    <p>${kmLeft}</p>
    `
}

function getAverageRemainingKmTemplate(){
    return `
        <h3>Ø verbleibende km/Monat</h3>
        <p>${avgKm}</p>
    `
}




