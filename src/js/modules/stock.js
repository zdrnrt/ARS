
window.stockOpen = function() {
    loadingToggle();
    fetch('./src/html/stock.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети ' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;

            // document.getElementById('mainContentStock').innerHTML = html;

            stockWarehouseDraw();
            producstDraw();
            loadingToggle();
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки: ', error);
        })
}

/// сохранение настроек
window.stockParametersSubmit = function(event){
    event.preventDefault();
    const form = event.target;
    // const modal = new Modal(form.closest('.modal'), {});
    // console.log(modal);
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

    // modal.hide();
    // stockModalParametersClose();
}

window.stockparameterDraw = function (request){
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
            template += `<div class="mb-1"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="warehouse" value="${el.id}"> ${el.title}</label></div>`
        });
    } else {
        template += 'Ничего не найдено'
    }
    template += '</div>'
    document.getElementById('warehouse-content').insertAdjacentHTML('beforeend', template);
}
