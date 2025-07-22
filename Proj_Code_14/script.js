//Logic behind notes app, use CRUD Bbro pls

//array for added notes
let notes = [];
let noteIndex = 0;

//submit on modal
function submitNote(){
  if(!document.getElementById('textNotesTitle').value || !document.getElementById('textNotes').value){
    alert("Enter a value for each.");
    return;
  }else{
  notes.push({
    id:`${document.getElementById('textNotesTitle').value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    name: document.getElementById('textNotesTitle').value,
    desc: document.getElementById('textNotes').value
  });
}
  modal.style.display = "none";
  checkForNotes();
  document.getElementById('textNotesTitle').value = '';
  document.getElementById('textNotes').value = '';

}

function addNote(){
    document.getElementById("modal").style.display = "block";
}

function checkForNotes(){
  if(notes.length === 0){
    console.err("No notes were found.");
    return;
  } else{
    notes.forEach(({id, name, desc}, index) =>{ 
      console.log(`Note found at index[${index}] is:
        ID: ${id},
        name: ${name}
        description: ${desc} `);
    });
  }
   updateNotes();
}

//function for updating
function updateNotes(){
  document.getElementById('container').innerHTML  = "";
  notes.forEach(({name, desc})=>{
    document.getElementById('container').innerHTML  += `
      <h2>${name}</h2>
      <p>${desc}</p>

    `
  });
}

//function for editing notes, remember to include the Id of the user's desired choice.
function editNote(){

}

//function for deleting notes, remember to include the Id of the user's desired choice.
function deleteNote(){

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}