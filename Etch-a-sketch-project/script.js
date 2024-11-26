const gridContainer = document.getElementById('grid');
const gridSizeInput = document.getElementById('grid-size');
const gridValueLabel = document.getElementById('grid-value');

function createGrid(size) {
  gridContainer.innerHTML = ''; // Clear existing grid
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }

  addHoverEffect();
}
function addHoverEffect() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black'; // Change to any color
      });
    });
  }
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    createGrid(gridSizeInput.value);
  });
gridSizeInput.addEventListener('input', () => {
    const size = gridSizeInput.value;
    gridValueLabel.textContent = `${size}`;
    createGrid(size);
  });
  createGrid(gridSizeInput.value);
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  
  function addHoverEffect() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getRandomColor();
      });
    });
  }
  function addHoverEffect() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        let currentOpacity = parseFloat(item.style.opacity) || 0;
        currentOpacity = Math.min(currentOpacity + 0.1, 1); // Cap at full opacity
        item.style.backgroundColor = 'black';
        item.style.opacity = currentOpacity;
      });
    });
  }
  const colorPicker = document.getElementById('color-picker');
  let currentColor = colorPicker.value;
  
  colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
  });
  
  function addHoverEffect() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = currentColor;
      });
    });
  }
        