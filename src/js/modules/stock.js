window.showContent_stock = function() {
    fetch('./src/html/stock.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети ' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('mainContentStock').innerHTML = html;
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки: ', error);
        });
}

