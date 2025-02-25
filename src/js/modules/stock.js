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

            stockWarehouseDraw()

        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки: ', error);
        });
}

///модальное окно стока
window.stockModalParametersOpen = function() {
    document.getElementById('modalStockParameters').style.display = 'block';
    document.addEventListener('click', stockModalParametersListener)
}

window.stockModalParametersClose = function() {
    document.getElementById('modalStockParameters').style.display = 'none';
    document.removeEventListener('click', stockModalParametersListener)
}

window.stockModalParametersListener = function(event) {
    if (event.target == document.getElementById('modalStockParameters')) {
        stockModalParametersClose();
    }
}

/// включение ввода своих значений
window.stockParametersValue = function(input) {
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
window.stockParametersSubmit = function(event){
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
    stockparameterDraw(result);
    form.reset();
    stockModalParametersClose();
}

window.stockparameterDraw = function (request){
    // console.log(re)
    const content = document.getElementById('parameters-content');
    let template = `<div class="parameter-item" data-parameters='${JSON.stringify(request)}'>`;
    for (const key in request){
        template += `<div class="parameter-item__item">${document.querySelector(`label[for=${key}]`).textContent}: ${request[key]}</div>`
    }
    template += '</div>';
    content.insertAdjacentHTML('beforeend', template);
}

// отрисовка списка складов

window.stockWarehouseDraw = function(){
    let template = '<div>'
    if (WAREHOUSE){
        WAREHOUSE.forEach(el => {
            template += `<div><label><input type="checkbox" name="warehouse" value="${el.id}">${el.title}</label></div>`
        });
    } else {
        template += 'Ничего не найдено'
    }
    template += '</div>'
    document.getElementById('warehouse-content').insertAdjacentHTML('beforeend', template);
}