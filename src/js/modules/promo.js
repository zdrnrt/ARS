
window.promoOpen = function() {
    fetch('./src/html/promo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Реакция сети ' + response.statusText);
            }
            return response.text(); 
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;

            // document.getElementById('mainContentStock').innerHTML = html;

            // stockWarehouseDraw();
            // stockProducstDraw();

        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки: ', error);
        });
}
/*

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
            template += `<div><label class="form-check-label"><input class="form-check-input" type="checkbox" name="warehouse" value="${el.id}"> ${el.title}</label></div>`
        });
    } else {
        template += 'Ничего не найдено'
    }
    template += '</div>'
    document.getElementById('warehouse-content').insertAdjacentHTML('beforeend', template);
}

window.stockProducstDraw = function(){
    let template = '<div>'

    if (PRODUCTS){
        for (const l2 in PRODUCTS){
            template += `<div><label><input type="checkbox"> ${l2}</label>`
            for (const l3 in PRODUCTS[l2]){
                template += `<div><label><input type="checkbox"> ${l3}</label>`
                for (const l4 in PRODUCTS[l2][l3]){
                    template += `<div><label><input type="checkbox"> ${l4}</label>`
                    for (const l5 in PRODUCTS[l2][l3][l4]){
                        for (const product of PRODUCTS[l2][l3][l4][l5]){
                            // for (const v of Object.values(product)){
                                const item = Object.values(product)
                                template += `<label><input type="checkbox"> ${item[0]} - ${item[1]}</label>`
                            // }
                        }
                    }
                    template += '</div>'
                }
                template += '</div>'
            }
            template += '</div>'
        }
    } else {
        template += 'Ничего не найдено'
    }
    template += '</div>'
    document.getElementById('products-content').insertAdjacentHTML('beforeend', template);

}
*/