// memory card game 3x3

let currentSelections = [];
const box = document.querySelector('.box');

for(let i = 0; i<9; i++){
    const elem = document.createElement("div");
    elem.id = `elem-${i}`;
    elem.addEventListener('click', event =>{
        console.log(event.target.id);
    });
    box.append(elem);
}

//check for elems if a pair is matched vertically
function check(){
    
}

