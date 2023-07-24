const contactObject = {
  text: 'Let\'s work together',
  email: 'hello@heriyanto.dev'
}


function createContactElement(
  contactData
) {
  return `
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-wrapper load-hidden">
        <p class="contact-wrapper__text">${contactData.text}</p>
        <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume"
          href="mailto:${contactData.email}">${contactData.email}</a>
      </div>
    </div>
  `
}

export function contact(
  elementID = 'contact',
  contactData = contactObject,
) {
  const contactElement = document.getElementById(elementID);
  contactElement.innerHTML = createContactElement(contactData);
}

