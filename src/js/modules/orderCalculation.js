window.orderCalculationOpen = function() {
    loadingToggle();
    fetch('./src/html/orderCalculation.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
            // TODO отрисовки в глобавльные функции
            producstDraw();
            // stockWarehouseDraw();
            // stockProducstDraw();
            loadingToggle();
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}