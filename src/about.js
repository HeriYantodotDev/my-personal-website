export function about() {
  const aboutPart1 = `
    Full-stack developer 🧑‍💻 with a focus on <strong>JavaScript</strong>,
    <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>,
    <strong>React.js</strong>, and <strong>PostgreSQL</strong>.
    Embracing TDD and eager to share my learning journey.
    I prioritize clean code and Test Driven Development in my development process.
  `;

  const aboutPart2 = `
  I'm continuously building projects, learning new coding skills, and sharing my journey on 
  <a rel="noreferrer" target="_blank" href="https://twitter.com/HeriYantodotDev">Twitter</a>, 
  <a rel="noreferrer" target="_blank" href="https://github.com/HeriYantodotDev">GitHub</a>, and 
  <a rel="noreferrer" target="_blank" href="https://blog.heriyanto.dev/">My blog</a>. 
  Follow me for insights, tips, and updates on my progress. 
  Let's collaborate and create something amazing together!
  `;

  document.getElementById('aboutPart1').innerHTML = aboutPart1;
  document.getElementById('aboutPart2').innerHTML = aboutPart2;
}
