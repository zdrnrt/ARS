import showContent_stock from "./modules/stock.js";
import showContent_orderCalculation from "./modules/orderCalculation.js";
import showContent_orderParameters from "./modules/orderParameters.js";
import showContent_promoAz from "./modules/promoAz.js";
import showContent_settingsAz from "./modules/settingsAz.js";
import showContent_BI from "./modules/biBlock.js";

import imageZE from '/images/users/ZilevichElizaveta.jpg';
import imageTO from '/images/users/TkachevOleg.jpg';
import imageTG from '/images/users/TolokGalina.jpg';
import imageNP from '/images/users/question.jpg';
import imageU1 from '/images/users/user1.png';

/*вставка юзера ПЕРЕНЕСЬТИ*/
window.updateUserImage = function() {
  const userSelect = document.getElementById('header_top_user');
  const userImageDiv = document.getElementById('userImage');
  const images = {
      option1: imageNP,
      option2: imageZE ,
      option3: imageU1, 
      option4: imageTO , 
      option5: imageU1, 
      option6: imageTG,
      option7: imageU1 

  };

  const selectedValue = userSelect.value;

  userImageDiv.innerHTML = '';

  if (selectedValue && images[selectedValue]) {
      const img = document.createElement('img');
      img.src = images[selectedValue];
      img.alt = selectedValue;
      img.style.width = '40px';
      img.style.borderRadius = '50px';
      userImageDiv.appendChild(img);
      img.style.border= `2px #4757de solid`;
  }

  
}
/*вставка юзера*/


///модальное окно стока
    window.addParametsStock = function() {
      document.getElementById('modalStock').style.display = 'block';
  }

  window.closeModalStock = function() {
      document.getElementById('modalStock').style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == document.getElementById('modalStock')) {
          document.getElementById('modalStock').style.display = 'none';
      }
  }

  document.addEventListener('DOMContentLoaded', function() {
  });
  






  document.addEventListener("DOMContentLoaded", function() {
    const accordion = document.querySelector("#accordionExample");
    const parametersBlock = document.querySelector(".parameters_orderCalculation");

    accordion.addEventListener("show.bs.collapse", function() {
        // Увеличиваем высоту при раскрытии
        parametersBlock.style.height = "40%";
    });

    accordion.addEventListener("hide.bs.collapse", function() {
        // Уменьшаем высоту при закрытии
        parametersBlock.style.height = "20%";
    });
});









