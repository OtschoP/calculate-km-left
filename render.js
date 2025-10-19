function renderToday(){
    const html = document.getElementById('today');
    html.innerHTML = "";
    html.innerHTML = getTodayTemplate();
}

function renderDrivenKilometers(){
    const html = document.getElementById('driven-km');
    html.innerHTML = getDrivenKilometersTemplate();
}

function renderRemainingKilometers(){
    const html = document.getElementById('remaining-kilometers');
    html.innerHTML = getRemainingKilometersTemplate();
}

function renderAverageRemainingKm(){
    const html = document.getElementById('km-per-month');
    html.innerHTML = getAverageRemainingKmTemplate();
}
