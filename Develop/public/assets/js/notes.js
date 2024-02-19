// const saveData = require(saveData);

function saveNote(noteTitle, noteText){ 
     noteTitle = document.getElementById('noteTitle').value;
     noteText = document.getElementById('noteText').value;
    let newTitle = document.getElementById('notesContainer');
        newTitle.innerHTML +=  `<h2>${noteTitle}</h2><br/><h3>${noteText}</h3>`;
        saveData(noteTitle,noteText);
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

function saveData(noteTitle, noteText){
    let postdata = {
        title: noteTitle,
        text: noteText
    };
    let data = JSON.stringify(postdata);

    let url = '/api/notes'
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'       
      },
      body: data
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => { 
        console.log(json);
    }).catch(err => console.error('error:' + err));

};



