const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const remove = document.getElementById('delete');
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute('contenteditable', 'true');
    img.setAttribute('src', "images/delete.png");
    notesContainer.appendChild(inputBox).appendChild(img);
});

remove.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})