export default window.showContent_orderCalculation = function() {

    fetch('./src/html/orderCalculation.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('mainContentOrderCalculation').innerHTML = html;
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}