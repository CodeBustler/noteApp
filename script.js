let notesContainer = document.querySelector(".notes-container");
let addNoteBTN = document.querySelector(".addNote");
let deleteNote = document.querySelector(".fa-trash");

function addNewNote() {
	let newNote = document.createElement("div");
	newNote.classList.add("notes");
	let noteText = document.createElement("p");
	noteText.setAttribute("contenteditable", "true");
	noteText.setAttribute("spellcheck", "false");
	noteText.classList.add("para");
	let deletIcon = document.createElement("i");
	deletIcon.classList.add("fa-solid", "fa-trash-alt");
	deletIcon.setAttribute("title", "Delete Note");

	newNote.appendChild(noteText);
	newNote.appendChild(deletIcon);

	notesContainer.appendChild(newNote);
	saveNotes();
}

notesContainer.addEventListener("click", (e) => {
	let hasClass = e.target.classList.contains("fa-trash-alt");
	if (hasClass) {
		let confirmation = confirm("Do you want to delete note ?");
		confirmation && e.target.parentElement.remove();
		saveNotes();
	} else if (e.target.tagName === "P") {
		let notes = document.querySelectorAll(".para");
		notes.forEach((nt) => {
			nt.onkeyup = () => {
				saveNotes();
			};
		});
	}
});

addNoteBTN.addEventListener("click", addNewNote);

function saveNotes() {
	localStorage.setItem("keepNotes", notesContainer.innerHTML);
}

function getNotes() {
	notesContainer.innerHTML = localStorage.getItem("keepNotes");
}

getNotes();
