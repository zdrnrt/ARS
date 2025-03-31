import { Chart } from 'chart.js/auto'
import { Modal } from 'bootstrap';

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
            stockChartDraw();
            loadingToggle();
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки: ', error);
        })
}

/// сохранение настроек
window.stockParametersSelect = function(event){
    event.preventDefault();
    const form = event.target;

    const filterList = document.getElementById('parametersContent');

    for (const control of form.querySelectorAll('input')){
        const el = filterList.querySelector(`[name="${control.name}"]`);
        el.disabled = true;
        el.closest('.form-group').classList.remove('d-block');
        if (control.checked){
            el.disabled = false;
            el.closest('.form-group').classList.add('d-block')
        }
        // control.classList.remove()
        // console.log(control)
        // console.log(control.checked)
        // console.log(control.name)
    }
    Modal.getInstance(document.getElementById('stockModalParameters')).hide()

}
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
    // form.reset();

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
            template += `<div class="warehouse-item mb-1"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="warehouse" value="${el.id}"> ${el.title}</label></div>`
        });
    } else {
        template += 'Ничего не найдено'
    }
    template += '</div>'
    document.getElementById('warehouse-content').insertAdjacentHTML('beforeend', template);
}

window.stockChartDraw = function(){
    const chart = document.getElementById('stock-chart');

    function randomData() {
        let arr = new Array(10);
        for (let i = 0; i < arr.length; i++){
            arr[i] = Math.floor(Math.random() * 10000)
        }
        return arr
    }

    const stockChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
                {
                    label: 'Оверсток факт',
                    data: [46_000, 50_600, 45_540, 36_432, 40_075, 44_083, 48_491, 53_340, 48_006, 43_205],
                    fill: true,
                },
                {
                    label: 'Оверсток план',
                    data: [30_000, 33_000, 29_700, 23_760, 26_136, 28_750, 31_625, 34_787, 31_308, 28_177],
                    fill: false,
                },
                {
                    label: 'Неактивный факт',
                    data: [27_000, 29_700, 26_730, 21_384, 23_522, 25_875, 28_462, 31_308, 28_177, 25_360],
                    fill: true,
                },
                {
                    label: 'Неактивный план',
                    data: [20_000, 22_000, 19_800, 15_840, 17_424, 19_166, 21_083, 23_191, 20_872, 18_785],
                    fill: false,
                },
                {
                    label: 'Страховые запасы факт',
                    data: [69_000, 75_900, 68_310, 54_648, 60_113, 66_124, 72_736, 80_010, 72_009, 64_808],
                    fill: true,
                },
                {
                    label: 'Страховые запасы план',
                    data: [75_000, 82_500, 74_250, 59_400, 65_340, 71_874, 79_061, 86_968, 78_271, 70_444],
                    fill: false,
                },
                {
                    label: 'Презентационный запас факт',
                    data: [46_000, 50_600, 45_540, 36_432, 40_075, 44_083, 48_491, 53_340, 48_006, 43_205],
                    fill: true,
                },
                {
                    label: 'Презентационный запас план',
                    data: [50_200, 55_220, 49_698, 39_758, 43_734, 48_108, 52_918, 58_210, 52_389, 47_150],
                    fill: false,
                },
                {
                    label: 'Запас под продажу',
                    data: [45_000, 49_500, 44_550, 35_640, 39_204, 43_124, 47_437, 52_181, 46_962, 42_266],
                    fill: true,
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    fullSize: true
                }  
            },
            aspectRatio: 0.8,
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        }
    });
}