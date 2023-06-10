function createMenu() {
  const contact = document.createElement("div");
  contact.classList.add("menu");

  contact.appendChild(createParagraph("Menu"));
  contact.appendChild(createParagraph("Starters"));
  contact.appendChild(createParagraph("Plates"));

  return contact;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadMenu() {
  const content = document.querySelector("div#content");

  content.textContent = "";
  content.appendChild(createMenu());
}

export default loadMenu;
