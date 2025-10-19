function renderToday(){
    const html = document.getElementById('today');
    html.innerHTML = "";
    html.innerHTML = getTodayTemplate();
}


