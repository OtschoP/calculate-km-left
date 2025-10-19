function renderToday(){
    const html = document.getElementById('today');
    html.innerHTML = "";
    html.innerHTML = getTodayTemplate();
}

function renderRemainingKilometers(){
    const html = document.getElementById('remaining-kilometers');
    html.innerHTML = getRemainingKilometersTemplate();
}
