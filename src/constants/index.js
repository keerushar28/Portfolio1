import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  logostellar,
  shopify,
  blog,
  jobit,
  stellartech,
  stamp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Stellar Tech",
    icon: stamp,
    iconBg: "#E6DEDD",
    date: "March 2020 - Jan 2021",
    points: [
      "Developing and maintaining server-side applications using Node.js, Express, and other backend technologies.",
      "Designing and implementing RESTful APIs to support seamless communication between frontend and backend systems.",
      "Collaborating with cross-functional teams, including frontend developers, designers, and product managers, to deliver scalable and efficient solutions.",
      "Ensuring database integrity and performance by working with relational and non-relational databases like MongoDB and MySQL.",
      "Troubleshooting and debugging complex issues in development and production environments."
    ],
  },
  {
    title: "Full Stack & Middleware Developer",
    company_name: "Stellar Tech",
    icon: stamp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Developing and integrating robust middleware solutions to enable seamless communication between distributed systems and applications.",
      "Designing and optimizing scalable backend architectures and APIs, ensuring high performance and reliability for end-to-end web applications.",
      "Implementing secure and efficient data flow between frontend and backend, utilizing databases like MongoDB, PostgreSQL, and middleware tools.",
      "Collaborating with cross-functional teams to deliver scalable, maintainable, and high-quality solutions aligned with business goals."
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Stellar Tech",
    icon: stamp,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designing and automating CI/CD pipelines to streamline the software development lifecycle and ensure efficient deployment processes.",
      "Managing cloud infrastructure and ensuring system reliability, scalability, and security using tools like AWS, Docker, and Kubernetes."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Pabin Paudel",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kiran does.",
    name: "Prajwal KC",
    designation: "CEO",
    company: "Stellar Tech Labs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kiran optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Prajwal KC",
    designation: "CEO",
    company: "Stellar Tech Labs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Blog Site",
    description:
      "This blog site, crafted using the MERN stack (MongoDB, Express.js, React.js, Node.js), offers a seamless and dynamic platform with role-based access control. Users can explore and read a wide range of thoughtfully crafted blogs, while the admin enjoys comprehensive management capabilities through a dedicated dashboard. The admin dashboard allows efficient oversight of users, posts, and comments, ensuring quality and engagement across the platform. With its secure and user-friendly design, this blog site provides a delightful experience for both readers and administrators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/keerushar28/mern-blog",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stellar Tech Website",
    description:
      "This modern website, designed for a tech company, establishes a strong digital presence with a sleek and professional design. It highlights the company's services, expertise, and innovative solutions while offering intuitive navigation for a seamless user experience. With responsive design and engaging content, the website effectively communicates the company's vision and connects with clients in the digital space.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: stellartech,
    source_code_link: "https://www.stellartechlabs.info/",
  },
];

export { services, technologies, experiences, testimonials, projects };
