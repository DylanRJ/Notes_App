const addNote = (notetitle, notebody, callback) => {
    fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'title': `${notetitle}`, 'content': `${notebody}`})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.title)
        const tag = document.createElement('span')
        tag.textContent = data.title
        tag.id = 'note-1'
        document.body.appendChild(document.createElement('br'))
        document.body.appendChild(document.createElement('br'))
        document.body.appendChild(tag)
      })
}


module.exports = addNote;