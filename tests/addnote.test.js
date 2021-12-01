/**
 * @jest-environment jsdom
 */

test('displays list of notes', () => {
  document.body.innerHTML = `
    <h1>Notes</h1>
    <input type="text" id="title-input">
    <input type="text" id="body-input">
    <input type="button" id="note-submit"/>
  `;

  require('../index');

  document.querySelector('#title-input').value = 'Note 1 title';
  document.querySelector('#body-input').value = 'Note body';
  document.querySelector('#note-submit').click();

  expect(document.querySelector('#note-1')).innerText.toBe('Note 1 title');

});