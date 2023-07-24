const skillsArray = [
  {
    skillURL : 'https://www.typescriptlang.org/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
    altImg: 'TypeScript'
  },
  {
    skillURL : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
    altImg: 'JavaScript'
  },
  {
    skillURL : 'https://reactjs.org/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
    altImg: 'React'
  },
 
  {
    skillURL : 'https://nodejs.org/en/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
    altImg: 'NodeJS'
  },
  {
    skillURL : 'https://expressjs.com/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg',
    altImg: 'Express'
  },
  {
    skillURL : 'https://www.postgresql.org/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
    altImg: 'PostgreSQL'
  },
  {
    skillURL : 'https://www.mongodb.com/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
    altImg: 'MongoDB'
  },
  {
    skillURL : 'https://graphql.org/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg',
    altImg: 'GraphQL'
  },
  {
    skillURL : 'https://getbootstrap.com/', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg',
    altImg: 'Bootstrap'
  },
  {
    skillURL : 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
    altImg: 'HTML5'
  },
 
  {
    skillURL : 'https://www.w3.org/TR/CSS/#css', 
    imgURL: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    altImg: 'CSS3'
  },
]

function createSkillElement(skill) {
  return `
  <a href=${skill.skillURL} target="_blank" rel="noreferrer"><img
  src=${skill.imgURL}
  width="36" height="36" alt=${skill.altImg} /></a>
  `
}

export function skills(
  elementID = 'skills',
  skillsList = skillsArray
) {

  const skillsWrapper = document.getElementById(elementID);

  skillsList.forEach((skill) => {
    const skillItemElement = createSkillElement(skill);
    skillsWrapper.innerHTML += skillItemElement
  })
}
