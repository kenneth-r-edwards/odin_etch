// make function that makes a grid.


    
function beginGame() {
    var container = document.getElementById('container');
    container.innerHTML = "";

    var contWidth = 600;
    let dims = prompt("How many squares would you like for one side of the grid?");
    for (let i = 0; i < dims * dims; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = "lightgray";
        block.style.width = `${contWidth / dims - 10}px`;
        block.style.height = `${contWidth / dims - 10}px`;  
        container.appendChild(block);  
    }

    const blocks = document.getElementsByClassName('block');



    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('mouseover', function(){
            blocks[i].style.backgroundColor = 'green';
        });
    }
}

//make first pad

for (let i = 0; i < 16; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = "lightgray";
    block.style.width = "120px";
    block.style.height = "120px";  
    container.appendChild(block);  
}


const btn = document.getElementById('btn');
btn.addEventListener('click', beginGame);
const blocks = document.getElementsByClassName('block');



for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('mouseover', function(){
        blocks[i].style.backgroundColor = 'green';
    });
}




