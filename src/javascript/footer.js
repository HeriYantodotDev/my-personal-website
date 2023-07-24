const footerLinkArray = [
  {
    link: 'https://github.com/HeriYantodotDev',
    name: 'Heri yanto'
  },
  {
    link: 'https://en.wikipedia.org/wiki/Indonesia',
    name: 'Indonesia'
  }
]

export function footer(
  elementID = 'footerNotes',
  footerData = footerLinkArray,
) {
  const footerNotesElement = document.getElementById(elementID);

  footerNotesElement.innerHTML+= footerYear();

  footerData.forEach((footerLink) => {
    const footerLinkItem = `
      |
      <a rel="noreferrer" href=${footerLink.link} target="_blank">
        ${footerLink.name}
      </a>
    `
    footerNotesElement.innerHTML += footerLinkItem;
  })

}

function footerYear(
  startYear = '2022'
) {
  return `@ ${startYear} - ` + new Date().getFullYear();
}
