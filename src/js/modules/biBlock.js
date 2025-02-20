export default window.showContent_BI = function() {

    fetch('./src/html/biBlock.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('mainContentBI').innerHTML = html;
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}