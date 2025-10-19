const today = new Date();
const KM_TARGET = 12761;
const END_DATE = new Date("2026-10-10");
let kmLeft = "gefahrene Kilometer eintragen";
let avgKm = "hier erscheint der Durchschnitt";

function init() {
    renderAll()
    inputEventListener();
}

function renderAll() {
    renderToday();
    renderRemainingKilometers();
    renderAverageRemainingKm();
}

function inputEventListener() {
    document.getElementById('km-input').addEventListener('input', () => {
        const km = parseFloat(document.getElementById('km-input').value);
        if (!Number.isNaN(km)) {
            calculateRemainingKilometers(km);
            calculateAverageRemainingKmPerMonth();
            renderAverageRemainingKm();
        }
    });
}

function calculateRemainingKilometers(km){
    kmLeft = KM_TARGET - km;
    renderRemainingKilometers();
}

function calculateAverageRemainingKmPerMonth(){
    const monthsLeft =  (END_DATE.getFullYear() - today.getFullYear()) * 12
  + (END_DATE.getMonth() - today.getMonth());

    if (monthsLeft <= 0) {
  avgKm = "0";
  return 0;
}
    const avgKmPerMonth = kmLeft / monthsLeft;
    avgKm = avgKmPerMonth.toFixed(0);
    return avgKm;
}


