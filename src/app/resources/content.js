import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bryce",
  lastName: "Servis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Programmer",
  avatar: "/images/avatar.png",
  location: "Illinois, United States",
  languages: ["English"],
  timezone: "Central Standard Time",
  birthday: "April 23rd, 2008",
  pronouns: "He/Him",
};

const social = [
  {
    name: "Email",
    icon: "email",
    link: "mailto:bryce@bryceserv.is",
  },
  {
    name: "Pretty Good Privacy",
    icon: "pgp",
    link: "/9842EC1B.asc",
  },
  {
    name: "Resume",
    icon: "doc",
    link: "/resume.pdf",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/servisbryce/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bryce-servis-328381357",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my projects as a ${person.role}`,
  headline: <>Hello, <br></br>I'm Bryce.</>,
  subline: (
    <>
      I am a hobbyist programmer and a student. I develop applications and libraries for Linux-based operating systems. But I also love tinkering and learning new technologies and languages to grow my skills as a programmer.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a hobbyist programmer and a student. I develop applications and libraries for Linux-based operating systems. But I also love tinkering and learning new technologies and languages to grow my skills as a programmer.
      </>
    ),
  },
  projects: {
    display: false, // set to false to hide this section
    title: "projects Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design projectsflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Metamora Township High School",
        description: <>2022 to 2026</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C",
        description: <>I taught myself the C programming language early in 2025 to challenge myself and experiment with low-level programming. I am proficient in building multithreaded applications and socket programming.</>,
        images: [],
      },
      {
        title: "JavaScript",
        description: <>I have practiced the JavaScript programming language for many years where I have created various full-stack applications on many different mediums and environments.</>,
        images: [],
      },
      {
        title: "Linux",
        description: <>I've been using Linux as my operating system for many years across many different environments such as on physical servers, the desktop, and the cloud.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {

        title: "Python",
        description: <>I've recently started picking Python back up after an extended hiatus to utilize it in developing modular <code>REST API's</code> for collecting analytics and analyzing data.</>,
        images: [],

      },
      {
        title: "Computer Hardware",
        description: <>I built high-end personal computers for others as a service. Furthermore, I've built my own personal computer while maintaining and upgrading my own server infrastructure. I've also experimented with single-board computers like the Raspberry Pi.</>,
        images: [],
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "My blog.",
  description: `Read what ${person.name} has been up to recently.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const projects = {
  label: "Projects",
  title: "My projects.",
  description: `Read what projects ${person.name} has been working on recently.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};

export { person, social, home, about, blog, projects };
