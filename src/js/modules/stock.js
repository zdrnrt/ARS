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

///модальное окно стока
window.stockModalSettingsOpen = function() {
    document.getElementById('modalStockSetting').style.display = 'block';
    document.addEventListener('click', stockModalSettingsListener)
}

window.stockModalSettingsClose = function() {
    document.getElementById('modalStockSetting').style.display = 'none';
    document.removeEventListener('click', stockModalSettingsListener)
}

window.stockModalSettingsListener = function(event) {
    if (event.target == document.getElementById('modalStockSetting')) {
        stockModalSettingsClose();
    }
}

/// включение ввода своих значений
window.stockSettingValue = function(input) {
    const inputValue = input.closest('.form-group').querySelector(`[name=${input.name}Value]`);
    if (inputValue){
        if (input.value == 'value'){
            inputValue.disabled = false;
        } else {
            inputValue.disabled = true;
        }
    }
}

/// сохранение настроек
window.stockSettingSubmit = function(event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let result = {};
    for (const [name, value] of formData){
        if (name.indexOf('Value') != -1){
            continue
        }
        if (value == 'value'){
            result[name] = formData.get(`${name}Value`)
        } else {
            result[name] = value
        }
    }
    stockSettingDraw(result);
    form.reset();
    stockModalSettingsClose();
}

window.stockSettingDraw = function (request){
    // console.log(re)
    const content = document.getElementById('settings-content');
    let template = `<div class="setting-item" data-settings='${JSON.stringify(request)}'>`;
    for (const key in request){
        template += `<div class="setting-item__item">${document.querySelector(`label[for=${key}]`).textContent}: ${request[key]}</div>`
    }
    template += '</div>';
    content.insertAdjacentHTML('beforeend', template);
}