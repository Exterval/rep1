// memory card game 3x3

let values = ['💀', '👿', '😭'];
let currentSelections = [];
let isAPair;
const box = document.querySelector('.box');

for(let i = 0; i<9; i++){
    const elem = document.createElement("div");
    elem.id = `elem-${i}`;
    elem.textContent = values[Math.floor(Math.random()*values.length-1)+1];
    box.append(elem);
}

Array.from(box.children).forEach((el)=>{
    el.addEventListener('click', clickedBox); //DEBUG
});

function disable(bool){
    console.log('disable called');
    if(bool === true){
        currentSelections[0].removeEventListener('click', clickedBox);
        currentSelections[1].removeEventListener('click', clickedBox);
    }
    return currentSelections.splice(0,2);
}

function pair(arr){
    if (arr.length < 2) return console.error('More items are needed to assess!');
    else isAPair = check(arr);
    disable(isAPair);
}

//check for elems if a pair is matched
function check(arr){
    console.log(arr);
    if(arr[0].innerText === arr[1].innerText){
        console.log('ts true'); 
        return true;
    } 
    else{
        return false;
    }
}

function clickedBox(el){
    el.classList.add('disabled');
    el.disabled = true;
    currentSelections.push(el);
    const pairID = setTimeout(pair(currentSelections), 500);
    }

