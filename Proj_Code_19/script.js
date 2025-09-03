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
        event.target.classList.add('disabled');
        event.target.disabled = true;
        currentSelections.push(event.target.innerText);
        const pairID = setTimeout(pair(currentSelections), 500);
    });
});

function reset(){
    console.log('reset called');

}

function pair(arr){
    if (arr.length < 2) return console.error('More items are needed to assess!');
    else check(arr);
    reset();
}

//check for elems if a pair is matched vertically
function check(arr){
    console.log(arr);
    if(arr[0] === arr[1]) console.log('ts true');
    else console.log('nah twin');
    return arr.splice(0,2);
}


