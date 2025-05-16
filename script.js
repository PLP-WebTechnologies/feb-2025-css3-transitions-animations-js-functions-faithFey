const box = document.getElementById('animateBox');
const colorPicker = document.getElementById('colorPicker');
const favoriteSpan = document.getElementById('favorite');

// Load stored preferences on page load
window.onload = () => {
  const savedColor = localStorage.getItem('boxColor');
  const favorite = localStorage.getItem('favoritePoultry');
  
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }

  if (favorite) {
    favoriteSpan.textContent = favorite.charAt(0).toUpperCase() + favorite.slice(1);
  }
};

// Store new color preference
colorPicker.addEventListener('input', (e) => {
  const newColor = e.target.value;
  box.style.backgroundColor = newColor;
  localStorage.setItem('boxColor', newColor);
});

// Animate the box
function triggerAnimation() {
  box.classList.add('animate');
  setTimeout(() => box.classList.remove('animate'), 500);
}

// Set favorite poultry type
function setFavorite(type) {
  localStorage.setItem('favoritePoultry', type);
  favoriteSpan.textContent = type.charAt(0).toUpperCase() + type.slice(1);
}
