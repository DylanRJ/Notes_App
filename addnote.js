const addNote = (notetitle, notebody, callback) => {
    fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'title': `${notetitle}`, 'body': `${notebody}`})
    })
    .then(response => response.json())
    .then(data => callback(data));
}


module.exports = addNote;