function show() {
  const contactList = document.getElementById("contact-list"); // Pegando elemento por ID
  console.log(contactList);

  const listElements = document.getElementsByTagName("li"); // Pegando elemento por tag
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input"); // Pegando elemento por classe
  console.log(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label"); // Pega todos os elementos pelo identificador que você desejar
  console.log(contacts);

  const contact1 = document.getElementsByName('contact1'); // Pega elemento por nome (name)
  console.log(contact1);

  const firstContact = document.querySelector('#contact-list > li > label') // Pega um unico elemento pelo identificador que você desejar
  console.log(firstContact);
}
