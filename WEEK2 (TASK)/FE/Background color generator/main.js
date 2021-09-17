let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange','#79ff88', '#d60000', ''];
let button = document.getElementById('button');

button.addEventListener('click', function(){
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.getElementById('container');

    container.style.background = randomColor;
})