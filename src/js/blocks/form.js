/// включение ввода своих значений
window.formParameterValue = function(input) {
  const inputValue = input.closest('.form-group').querySelector(`[name=${input.name}Value]`);
  if (inputValue){
      if (input.value == 'value'){
          inputValue.disabled = false;
      } else {
          inputValue.disabled = true;
      }
  }
}
