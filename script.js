const today = new Date();
const KM_TARGET = 12761;
const END_DATE = new Date("2026-10-10");
let kmLeft = "gefahrene Kilometer eintragen";

function init() {
    renderAll()
    inputEventListener();
}

function renderAll() {
    renderToday();
    renderRemainingKilometers();
}

function inputEventListener() {
    document.getElementById('km-input').addEventListener('change', () => {
        const km = parseFloat(document.getElementById('km-input').value);
        if (!Number.isNaN(km)) {
            calculateRemainingKilometers(km);
        }
    });
}

function calculateRemainingKilometers(km){
    kmLeft = KM_TARGET - km;
    renderRemainingKilometers();
}


