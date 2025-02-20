export default window.showContent_promoAz = function() {

    fetch('./src/html/promoAz.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('mainContentPromoAz').innerHTML = html;
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}