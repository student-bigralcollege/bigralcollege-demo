function changeBackground() {
  const colors = ['#f0f4f8', '#ffe4e1', '#e6ffe6', '#e0f7fa', '#fff3e0'];
  const currentColor = document.body.style.backgroundColor;
  let newColor = colors[Math.floor(Math.random() * colors.length)];

  // Ensure new color is different from current
  while (newColor === currentColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }

  document.body.style.backgroundColor = newColor;
}