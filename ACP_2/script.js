function changeBackgroundColor() {
    // You can also cycle through an array of colors or generate random colors
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    }
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', changeBackgroundColor);