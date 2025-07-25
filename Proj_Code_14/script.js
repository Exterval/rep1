//Logic behind notes app, use CRUD Bbro pls

//array for added notes
let notes = [];
let currentNote = {};

//submit on modal
function submitNote(){
  if(!document.getElementById('textNotesTitle').value || !document.getElementById('textNotes').value){
    alert("Enter a value for each.");
    return;
  }

  const index = notes.findIndex((note)=>note.id === currentNote.id);

  if(index === -1){
    notes.push({
    id:`${document.getElementById('textNotesTitle').value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    name: document.getElementById('textNotesTitle').value,
    desc: document.getElementById('textNotes').value
  });
  }else{
    notes[index] =  {
    id:`${document.getElementById('textNotesTitle').value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    name: document.getElementById('textNotesTitle').value,
    desc: document.getElementById('textNotes').value
  }
  }
  modal.style.display = "none";
  checkForNotes();
  document.getElementById('textNotesTitle').value = '';
  document.getElementById('textNotes').value = '';
}

function addNote(){
  document.getElementById('confirmBtn').innerText = "Confirm";
    document.getElementById("modal").style.display = "block";
}

function checkForNotes(){
  if(notes.length === 0){
    console.error("No notes were found.");
    return;
  } else{
    notes.forEach(({id, name, desc}, index) =>{ 
      console.log(`Note found at index[${index}] is:
        ID: ${id},
        name: ${name}
        description: ${desc} `);
    });
  }
  currentNote = {};
   updateNotes();
}

//function for updating
function updateNotes(){
  document.getElementById('container').innerHTML  = "";
  notes.forEach(({id, name, desc})=>{
    document.getElementById('container').innerHTML  += `
      <h2>${name}</h2>
      <p>${desc}</p>
      <button onclick="editNote(id)" class="noteBtn" id="${id}">Edit</button><button onclick = "deleteNote(id)" class="noteBtn" id="${id}">Delete</button>
    `
  });
}

//function for editing notes, remember to include the Id of the user's desired choice.
function editNote(ID){
      currentNote = notes.find(notes => notes.id === ID);
      document.getElementById('textNotesTitle').value = currentNote.name;
      document.getElementById('textNotes').value = currentNote.desc;
      document.getElementById('confirmBtn').innerText = "Edit";
      document.getElementById("modal").style.display = "block";
}

//function for deleting notes, remember to include the Id of the user's desired choice.
function deleteNote(ID){
  let index = notes.findIndex(notes => notes.id === ID);
  if(index !== -1){
   notes.splice(index, 1); 
  }
  updateNotes();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
