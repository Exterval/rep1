//Logic behind notes app, use CRUD Bbro pls

function addNote(){
    document.getElementById("modal").style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}