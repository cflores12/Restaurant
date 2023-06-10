function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.appendChild(createParagraph("Best Breakfast in your country"));
  contact.appendChild(createParagraph("Made with passion since 2022"));
  contact.appendChild(createParagraph("Order online or visit us!"));

  return contact;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadContact() {
  const content = document.querySelector("div#content");

  content.textContent = "";
  content.appendChild(createContact());
}

export default loadContact;
