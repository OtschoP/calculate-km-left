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

function calculateAverageRemainingKmPerMonth(){
    const monthsLeft = (END_DATE.getFullYear() - today.getFullYear() * 12 + (END_DATE.getMonth() - today.getMonth()));

    if (monthsLeft <= 0) {
        return 0; // Vertrag beendet
    }

    const avgKmPerMonth = kmLeft / monthsLeft;
    return avgKmPerMonth.toFixed(0);
}


