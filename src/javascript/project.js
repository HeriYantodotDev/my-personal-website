import pogiSumselProjectImage from '../assets/pogiSumselProject.png'
import coolStore from '../assets/cool-store.png';
import jokeFactory from '../assets/joke-factory.png';
import faceReg from '../assets/projectFaceReg.png';
import robo from '../assets/robo.png';
import spaceProject from '../assets/space_project.png';


const projectList = [
  {
    projectGroup : 'Business Projects',
    projectItems: [
      {
        projectTitle: 'POGI SUMSEL',
        projectDesription: `
          "Elevating local Obstetricians Organization" online presence with a user-friendly React app, 
          complete with a powerful CMS and backend access. 
          Stack: React, NodeJS, KeystoneJS, TypeScript(Backend). 
          This is an ongoing project. 
        `,
        liveURL: 'https://pogisumsel.com/',
        sourceCodeURL: null,
        projectDetailURL: 'https://www.showwcase.com/show/35593/business-project-pogi-website-first-stage',
        imageURL: pogiSumselProjectImage,
      },
    ]
  },

  {
    projectGroup : 'Fun Projects',
    projectItems: [
      {
        projectTitle: 'Mission Control Dashboard',
        projectDesription: `
          "Develop a NodeJS application with full stack capabilities that replicates a Mission Control Dashboard. 
          Incorporate Google OAuth for secure authentication and api.spacexdata.com 
          for accessing Space-X Launches Data.
        `,
        liveURL: 'https://missioncontrol.heriyanto.dev/',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/space-project-dashboard',
        projectDetailURL: 'https://profile.heriyanto.dev/show/33940/fun-project-space-project',
        imageURL: spaceProject
      },
      {
        projectTitle: 'Face Recog App',
        projectDesription: `
          A simple React App that recognizes faces in an image. 
          I'm using Clarifai API to detect faces.
        `,
        liveURL: 'https://facereg.heriyanto.dev/',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/smartBrain/',
        projectDetailURL: null,
        imageURL: faceReg
      },
      {
        projectTitle: 'Robot Friends',
        projectDesription: `
          Simple React App which renders robot profiles.
        `,
        liveURL: 'https://robofriends.heriyanto.dev/',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/robofriends',
        projectDetailURL: null,
        imageURL: robo
      },
    ]
  },
  {
    projectGroup : 'Ongoing Fun Projects',
    projectItems: [
      {
        projectTitle: 'Cool Store',
        projectDesription: `
          [Working in Progress] An e-commerce React App that leverages the power of Firebase as its backend platform. 
          The app offers a seamless shopping experience, 
          where users can explore an extensive range of products and make purchases with ease.
        `,
        liveURL: 'https://cool-store.heriyanto.dev/',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/cool-store',
        projectDetailURL: null,
        imageURL: coolStore
      },
      {
        projectTitle: 'Joke Factory',
        projectDesription: `
          [Working in Progress] A full-stack app (React + Node/Express) for users to share and read jokes. 
          Users can submit their own jokes, review existing jokes, and leave comments.
        `,
        liveURL: 'https://github.com/HeriYantodotDev/joke-factory',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/joke-factory',
        projectDetailURL: null,
        imageURL: jokeFactory
      },
    ]
  },
]

function createProjectGroupElements(projectGroupItem) {
  const {projectGroup, projectItems } = projectGroupItem

  let allProjectElements = '';

  const header = `
    <h2 class="section-title dark-blue-text">${projectGroup}</h2>
  `

  allProjectElements += header;

  for (let projectItem of projectItems) {
    const projectDetailURLElement = projectItem.projectDetailURL
      ? 
        `
          <a target="_blank" href=${projectItem.projectDetailURL}>Project
          Detail</a>.
        `
      : '';

    const projectDesriptionElement = projectItem.projectDesription + projectDetailURLElement;

    const liveURLElement = projectItem.liveURL
      ? 
        `
          <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
          href=${projectItem.liveURL}>
            See Live
          </a>
        `
      : '';

    const sourceCodeURLElement = projectItem.sourceCodeURL
      ? 
        `
          <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
            href=${projectItem.sourceCodeURL}>
            Source Code
          </a>
        `
      : '';

      allProjectElements += `
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper__text load-hidden">
              <h3 class="project-wrapper__text-title">${projectItem.projectTitle}</h3>
              <div>
                <p class="mb-4">
                  ${projectDesriptionElement}
                </p>
              </div>
              ${liveURLElement}
              ${sourceCodeURLElement}
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="project-wrapper__image load-hidden">
              <a rel="noreferrer" href=${projectItem.liveURL || ''} target="_blank">
                <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                  class="thumbnail rounded js-tilt">
                  <img alt="Project Image" class="img-fluid" src=${projectItem.imageURL} />
                </div>
              </a>
            </div>
          </div>
        </div>
      `
  }

  return allProjectElements;
}

export function project(
  elementID = 'projectContainer',
  projectArray = projectList,
) {
  const projectWrapper = document.getElementById(elementID);

  projectArray.forEach((projectGroupItem) => {
    const projectGroupItemElement = createProjectGroupElements(projectGroupItem);
    projectWrapper.innerHTML += projectGroupItemElement;
  });

}
