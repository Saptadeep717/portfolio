import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "egTeam an ed-tech platform",
    description:
      "An easy-to-use platform,provides quick access to instructional materials and interactive courses",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Saptadeep717/egTeamBackend",
    liveUrl: "https://eg-team.vercel.app/",
  },
  {
    id: 2,
    title: "egDocs a real time text editor",
    description:
      "A real-time document collaboration platform with concurrent edit and view real time changes" ,
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "React",
      "Quill.js",
    ],
    githubUrl: "https://github.com/Saptadeep717/eZdocsUpdated",
    liveUrl: "https://e-zdocs.vercel.app",
  },
  {
    id: 3,
    title: "C++ Application",
    description:
      "A website that includes several tiny projects based on real world DSA problems",
    technologies: ["C++", "HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Saptadeep717/cpp",
    liveUrl: "https://cpp-projects.pages.dev/",
  },
];