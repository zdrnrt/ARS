export default window.showContent_orderParameters = function() {

    fetch('./src/html/orderParameters.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('mainContentOrderParameters').innerHTML = html;
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}