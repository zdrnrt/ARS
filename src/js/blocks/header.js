import imageZE from '/images/users/ZilevichElizaveta.jpg';
import imageTO from '/images/users/TkachevOleg.jpg';
import imageTG from '/images/users/TolokGalina.jpg';
import imageNP from '/images/users/question.jpg';
import imageU1 from '/images/users/user1.png';

window.updateUserImage = (select) => {
  const userImages = {
    option1: imageNP, 
    option2: imageZE , 
    option3: imageU1, 
    option4: imageTO , 
    option5: imageU1, 
    option6: imageTG,
    option7: imageU1 
  };
  const value = select.value;
  const navimgUser = document.getElementById('navimg-user');
  if (value && userImages[value]) {
    navimgUser.src = userImages[value];
    navimgUser.style.border= '2px solid #4757de';
  }
}