function getTodayTemplate(){
    return `
    <p><b>${today.toLocaleDateString("de-DE")}</b></p>
    `
}

function getRemainingKilometersTemplate(){
    return `
    <h3>verbleibende Kilometer</h3>
    <p>${kmLeft}</p>
    `
}
