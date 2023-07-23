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
        imageURL: 'https://www.webivm.com/wp-content/uploads/Free-Pictures.jpg'
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
        imageURL: 'assets/space_project.png'
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
        imageURL: 'assets/projectFaceReg.png'
      },
      {
        projectTitle: 'Robot Friends',
        projectDesription: `
          Simple React App which renders robot profiles.
        `,
        liveURL: 'https://robofriends.heriyanto.dev/',
        sourceCodeURL: 'https://github.com/HeriYantodotDev/robofriends',
        projectDetailURL: null,
        imageURL: 'assets/robo.png'
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

export function project() {
  let projectWrapper = document.getElementById('projectContainer');


  projectList.forEach((projectGroupItem) => {
    let projectGroupItemElement = createProjectGroupElements(projectGroupItem);
    projectWrapper.innerHTML += projectGroupItemElement;
  });

}



{/* <h2 class="section-title dark-blue-text">Business Projects</h2>

<!-- Notice: each .row is a project -->
<div class="row">
  <div class="col-lg-4 col-sm-12">
    <div class="project-wrapper__text load-hidden">
      <h3 class="project-wrapper__text-title">POGI SUMSEL</h3>
      <div>
        <p class="mb-4">
          "Elevating local Obstetricians Organization" online presence with a user-friendly React app,
          complete with a powerful CMS and backend access.
          Stack: React, NodeJS, KeystoneJS, TypeScript(Backend).
          This is an ongoing project.
          <a target="_blank"
            href="https://www.showwcase.com/show/35593/business-project-pogi-website-first-stage">Project
            Detail</a>.
        </p>
      </div>
      <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="https://pogisumsel.com">
        See Live
      </a>
      <!-- <a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="assets/Work-In-Progres.jpg">
        Source Code
      </a> -->
    </div>
  </div>
  <div class="col-lg-8 col-sm-12">
    <div class="project-wrapper__image load-hidden">
      <a rel="noreferrer" href="https://pogisumsel.com" target="_blank">
        <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
          class="thumbnail rounded js-tilt">
          <img alt="Project Image" class="img-fluid" src="assets/pogiSumselProject.png" />
        </div>
      </a>
    </div>
  </div>
</div>
<!-- /END Project -->

<h2 class="section-title dark-blue-text">Fun Projects</h2>
<!-- Notice: each .row is a project -->
<div class="row">
  <div class="col-lg-4 col-sm-12">
    <div class="project-wrapper__text load-hidden">
      <h3 class="project-wrapper__text-title">Mission Control Dashboard</h3>
      <div>
        <p class="mb-4">
          Develop a NodeJS application with full stack capabilities that replicates a Mission Control Dashboard.
          Incorporate Google OAuth for secure authentication and api.spacexdata.com for accessing Space-X
          Launches Data.
          <a target="_blank" href="https://profile.heriyanto.dev/show/33940/fun-project-space-project">Project
            Detail</a>.
        </p>
      </div>
      <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
        href="https://missioncontrol.heriyanto.dev/">
        See Live
      </a>
      <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
        href="https://github.com/HeriYantodotDev/space-project-dashboard">
        Source Code
      </a>
    </div>
  </div>
  <div class="col-lg-8 col-sm-12">
    <div class="project-wrapper__image load-hidden">
      <a rel="noreferrer" href="https://missioncontrol.heriyanto.dev/" target="_blank">
        <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
          class="thumbnail rounded js-tilt">
          <img alt="Project Image" class="img-fluid" src="assets/space_project.png" />
        </div>
      </a>
    </div>
  </div>
</div>
<!-- /END Project -->

<!-- Notice: each .row is a project -->
<div class="row">
  <div class="col-lg-4 col-sm-12">
    <div class="project-wrapper__text load-hidden">
      <h3 class="project-wrapper__text-title">Face Recog App</h3>
      <div>
        <p class="mb-4">
          A simple React App that recognizes faces in an image.
          I'm using Clarifai API to detect faces.
        </p>
      </div>
      <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="https://facereg.heriyanto.dev/">
        See Live
      </a>
      <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
        href="https://github.com/HeriYantodotDev/smartBrain/">
        Source Code
      </a>
    </div>
  </div>
  <div class="col-lg-8 col-sm-12">
    <div class="project-wrapper__image load-hidden">
      <a rel="noreferrer" href="https://facereg.heriyanto.dev/" target="_blank">
        <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
          class="thumbnail rounded js-tilt">
          <img alt="Project Image" class="img-fluid" src="assets/projectFaceReg.png" />
        </div>
      </a>
    </div>
  </div>
</div>
<!-- /END Project -->

<!-- Notice: each .row is a project -->
<div class="row">
  <div class="col-lg-4 col-sm-12">
    <div class="project-wrapper__text load-hidden">
      <h3 class="project-wrapper__text-title">Robot Friends</h3>
      <div>
        <p class="mb-4">
          Simple React App which renders robot profiles.
        </p>
      </div>
      <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
        href="https://robofriends.heriyanto.dev/">
        See Live
      </a>
      <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
        href="https://github.com/HeriYantodotDev/robofriends">
        Source Code
      </a>
    </div>
  </div>
  <div class="col-lg-8 col-sm-12">
    <div class="project-wrapper__image load-hidden">
      <a rel="noreferrer" href="https://robofriends.heriyanto.dev/" target="_blank">
        <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
          class="thumbnail rounded js-tilt">
          <img alt="Project Image" class="img-fluid" src="assets/robo.png" />
        </div>
      </a>
    </div>
  </div>
</div>
<!-- /END Project --> */}