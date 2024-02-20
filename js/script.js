const showcase = document.querySelector(".showcase");
let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	let newTitle = prompt("Book Title?");
	let newAuthor = prompt("Author?");
	let newPages = prompt("How Many Pages?");
	let readStatus = confirm("Did you read it yet? OK for Yes / Cancel for No");

	const newBook = new Book(newTitle, newAuthor, newPages, readStatus);
	myLibrary.push(newBook);

	showcase.innerHTML = "";
	displayBooks();
}

const bookButton = document.querySelector(".bookButton");
bookButton.addEventListener("click", () => {
	addBookToLibrary();
});

function displayBooks() {
	myLibrary.forEach((item) => {
		const newCard = document.createElement("div");
		const newTitle = document.createElement("p");
		const newAuthor = document.createElement("p");
		const newPages = document.createElement("p");
		const newRead = document.createElement("p");
		const removeButton = document.createElement("button");

		removeButton.classList.add("rmv");
		removeButton.textContent = "Delete";
		newTitle.textContent = "Title: " + item.title;
		newAuthor.textContent = "Author: " + item.author;
		newPages.textContent = "Pages: " + item.pages;
		newRead.textContent = "Did I read it? " + item.read;

		removeButton.style.cssText =
			"width: 50%; align-self: flex-end; justify-self: end; border: none; border-radius: 5px; background-color: #dd7973; color: black; font-weight: bold";
		newTitle.style.cssText = "color: white; font-style: italic";
		newAuthor.style.cssText = "color: white; font-style: italic";
		newPages.style.cssText = "color: white; font-style: italic";
		newRead.style.cssText = "color: white; font-style: italic";

		newCard.style.cssText =
			"display: flex; flex-direction: column; background-color: #563232; padding: 1rem; gap: 5px;";
		// Append child elements to newCard
		newCard.appendChild(newTitle);
		newCard.appendChild(newAuthor);
		newCard.appendChild(newPages);
		newCard.appendChild(newRead);
		newCard.appendChild(removeButton);

		// Append newCard to showcase
		showcase.appendChild(newCard);

		removeButton.addEventListener("click", () => {
			myLibrary.splice(myLibrary.indexOf(item), 1);
			const parentElement = removeButton.parentNode;
			parentElement.remove();
		});
	});
}
