const addNote = require('./addnote');
const button = document.querySelector('#note-submit');
const callback = (variabledata) => { variabledata };

button.addEventListener('click', () => {
    addNote(document.querySelector('#title-input').value, document.querySelector('#body-input').value, callback);
});
