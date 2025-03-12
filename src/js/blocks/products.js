
window.producstDraw = function(){
  const content = document.getElementById('productsContent');
/*

<button class="aside-nav__item nav-item d-flex justify-content-start align-items-center collapsed" _onclick="tabChange(this);" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-expanded="true" aria-controls="nav-collapse">
  <img src="./public/images/icons/settings.svg" alt="Данные" class="nav-item__icon">
  <div class="nav-item__title">Карта процессов</div>
  <img src="./images/icons/angle.svg" alt="Данные" class="nav-item__angle">
</button>
<div id="nav-collapse" class="collapse aside-nav__item aside-nav__item--collapse" data-bs-parent="nav">
  <button class="aside-nav__item nav-item d-flex justify-content-start align-items-center" onclick="tabChange(this);">
    <div class="nav-item__title">Настройка</div>
  </button>
  <button class="aside-nav__item nav-item d-flex justify-content-start align-items-center" onclick="tabChange(this);">
    <div class="nav-item__title">Анализ</div>
  </button>
</div>

*/
/*
  PRODUCTS_L2.forEach( (el, i) => {
    content.insertAdjacentHTML('beforeend', `
      <div class="d-flex justify-content-between align-items-center _collapsed products-item">
        <label class="form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" value="${el}">${el}</label>
        <div data-bs-toggle="collapse" data-bs-target="#l2-collapse-${i}" aria-expanded="true" aria-controls="nav-collapse">
          <img src="./images/icons/angle.svg" alt="Данные" class="products-item__arrow">
        </div>
      </div>
      <div id="l2-collapse-${i}" data-l2-title="${el}">${el}</div>
    `);
  });
  
  PRODUCTS_L3.forEach( (el, i) => {
    content.insertAdjacentHTML('beforeend', `
      <div class="d-flex justify-content-between align-items-center _collapsed products-item">
        <label class="form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" value="${el}">${el}</label>
        <div data-bs-toggle="collapse" data-bs-target="#l2-collapse-${i}" aria-expanded="true" aria-controls="nav-collapse">
          <img src="./images/icons/angle.svg" alt="Данные" class="products-item__arrow">
        </div>
      </div>
      <div id="l2-collapse-${i}" data-l2-title="${el}">${el}</div>
    `);
  });
*/
  let template = '<div>'

  if (PRODUCTS){
      for (const l2 in PRODUCTS){
          let id = l2.split(' ')[0];
          template += `
            <div class="d-flex justify-content-between align-items-center _collapsed products-item">
              <label class="form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" value="${l2}" data-child="${l2}" onchange="productCheck(this);">${l2}</label>
              <div data-bs-toggle="collapse" data-bs-target="#l3-collapse-${id}" aria-expanded="true" aria-controls="nav-collapse" class="flex-shrink-0 products-item__arrow">
                <img src="./images/icons/angle.svg" alt="Данные">
              </div>
            </div>
            <div id="l3-collapse-${id}" data-category="${l2}" data-l3-title="${l2}" class="products-item__category collapse show">
          `;
          for (const l3 in PRODUCTS[l2]){
              id = l3.split(' ')[0];
              template += `
                <div class="d-flex justify-content-between align-items-center _collapsed products-item">
                  <label class="form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" value="${l3}" data-child="${l3}" data-parent="${l2}" onchange="productCheck(this);">${l3}</label>
                  <div data-bs-toggle="collapse" data-bs-target="#l3-collapse-${id}" aria-expanded="true" aria-controls="nav-collapse" class="flex-shrink-0 products-item__arrow">
                    <img src="./images/icons/angle.svg" alt="Данные">
                  </div>
                </div>
                <div id="l3-collapse-${id}" data-category="${l3}" data-l3-title="${l3}" class="products-item__category collapse show">
              `;
              // template += `<div class="products-item__sub"><label><input type="checkbox"> ${l3}</label>`
              for (const l4 in PRODUCTS[l2][l3]){
                id = l4.split(' ')[0];
                  // template += `<div class="products-item__sub"><label><input type="checkbox"> ${l4}</label>`
                  template += `
                    <div class="d-flex justify-content-between align-items-center _collapsed products-item">
                      <label class="form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" data-child="${l4}" data-parent="${l3}" value="${id}" onchange="productCheck(this);">${l4}</label>
                      <div data-bs-toggle="collapse" data-bs-target="#l4-collapse-${id}" aria-expanded="true" aria-controls="nav-collapse" class="flex-shrink-0 products-item__arrow">
                        <img src="./images/icons/angle.svg" alt="Данные">
                      </div>
                    </div>
                    <div id="l4-collapse-${id}" data-category="${l4}" class="products-item__category  collapse show">
                  `;
                  for (const l5 in PRODUCTS[l2][l3][l4]){
                    id = l5.split(' ')[0];
                      for (const product of PRODUCTS[l2][l3][l4][l5]){
                        const item = Object.values(product)
                        template += `<div class="products-item"><label class="d-block mb-1 form-check-label products-item__label"><input class="form-check-input me-2" type="checkbox" name="warehouse" value="${item[1]}" data-parent="${l4}" onchange="productCheck(this);">${item[0]} - ${item[1]}</label></div>`
                      }
                  }
                  template += '</div>'
              }
              template += '</div>'
          }
          template += '</div>'
      }
  }

  template += '</div>'
  document.getElementById('productsContent').insertAdjacentHTML('beforeend', template);

}

window.productCheck = function(elem){
  // const product = elem.closest('.products-item');
  const child = elem.dataset.child;
  if (child){
    document.querySelector(`[data-category="${child}"]`).querySelectorAll('.form-check-input').forEach( (el) => el.checked = elem.checked )
  }
  const parent = elem.dataset.parent;
  if (parent) {
    document.querySelector(`[data-child="${parent}"]`).indeterminate = elem.checked;
  }
}

window.productToggle = function(elem){

}
