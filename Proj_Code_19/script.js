// memory card game 3x3

let values = ['💀', '👿', '😭'];
let currentSelections = [];
const box = document.querySelector('.box');

for(let i = 0; i<9; i++){
    const elem = document.createElement("div");
    elem.id = `elem-${i}`;
    elem.textContent = values[Math.floor(Math.random()*values.length-1)+1];
    box.append(elem);
}

Array.from(box.children).forEach((el)=>{
    el.addEventListener('click', event =>{
        if(currentSelections.length === 2){
           return check(currentSelections); 
        }else{
           event.target.classList.add('disabled');
           currentSelections.push(event.target.textContent);
        } 
    setTimeout(pair(currentSelections), 500);
    });
});

function reset(){
    
}

function pair(arr){
    if (arr.length < 2)console.error('More items are needed to assess!');
    else check(arr);
}

//check for elems if a pair is matched vertically
function check(arr){
    if(arr[0] === arr[1])console.log('ts true');
    else console.log('nah twin');
    
    return arr.splice(0,2);
}


