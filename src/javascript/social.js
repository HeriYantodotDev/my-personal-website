
const socialArray = [
  {
    socialLink: 'https://github.com/HeriYantodotDev',
    classes: `fa-brands fa-github`
  }, 
  {
    socialLink: 'https://github.com/HeriYantodotDev',
    classes: `fa-brands fa-twitter`
  }, 
  {
    socialLink: 'https://www.linkedin.com/in/HeriYantodotDev/',
    classes: `fa-brands fa-linkedin`
  }, 
  {
    socialLink: 'https://blog.heriyanto.dev/',
    classes: `fa-solid fa-blog`
  }, 
]

function createSocialItemElement(social) {
  return `
    <a rel="noreferrer" href= ${social.socialLink} target="_blank">
    <i class= "${social.classes}"></i>
`
}

export function social(
  elementID = 'socials',
  socialList = socialArray, 
) {
  const socialElement = document.getElementById(elementID);

  socialList.forEach((social) => {
    const socialItemElement = createSocialItemElement(social);
    socialElement.innerHTML += socialItemElement;
  })
}
