


function saveNote(){ 
    let noteTitle = document.getElementById('noteTitle').value;
    let noteText = document.getElementById('noteText').value;
    let newTitle = document.getElementById('notesContainer');
       
        newTitle.innerHTML +=  `<h2>${noteTitle}</h2><br/><h3>${noteText}</h3>`;

}

function newNote(){
    let noteForm = document.getElementById('notesForm')
   

    noteForm.reset();
}

function clearForm(){
    let newTitle = document.getElementById('notesContainer');

    newTitle.innerHTML = '';
    newNote();
}