// * Create Function for finding Elements
const getElement = (id) => {
  return document.querySelector(id);
}

// * Add Functionalities
getElement('#emergency-hotline-info').addEventListener('click', (e) => {

  // * Heart Icons Functionalities
  if(e.target.className.includes('fa-heart')){
    const heart = getElement('#heart-click-count').innerText;
    getElement('#heart-click-count').innerText = Number(heart) + 1;
    e.target.classList.add('heart-style');
  }
});