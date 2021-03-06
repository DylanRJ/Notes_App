(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addnote.js
  var require_addnote = __commonJS({
    "addnote.js"(exports, module) {
      var addNote2 = (notetitle, notebody, callback2) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "title": `${notetitle}`, "content": `${notebody}` })
        }).then((response) => response.json()).then((data) => {
          const tag = document.createElement("span");
          tag.textContent = data.title;
          tag.id = "note-1";
          document.body.appendChild(document.createElement("br"));
          document.body.appendChild(document.createElement("br"));
          document.body.appendChild(tag);
        });
      };
      module.exports = addNote2;
    }
  });

  // index.js
  var addNote = require_addnote();
  var button = document.querySelector("#note-submit");
  var callback = (variabledata) => {
    variabledata;
  };
  button.addEventListener("click", () => {
    addNote(document.querySelector("#title-input").value, document.querySelector("#body-input").value, callback);
  });
})();
