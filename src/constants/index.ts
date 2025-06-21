import {
  mobile,
  backend,
  creator,
  web,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  // Programming Languages
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  
  // Web Technologies
  {
    name: "HTML 5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "React JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Node JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Three JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
  },
  
  // Cloud Platforms  
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Azure",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
  },
  {
    name: "Oracle",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  
  // AI/ML & Data Science
  {
    name: "TensorFlow",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Jupyter",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
  },
  
  // Databases
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  
  // Development Tools
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    name: "PyCharm",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  
  // Mobile Development
  {
    name: "Flutter",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  },
];

const experiences = [
  {
    title: "Graduate Assistant, Online Education Design",
    company_name: "Seattle University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Converted manual Health and Wellness Crew documentation into web-based format using SharePoint, enhancing accessibility and user experience.",
      "Developed an online training platform for students utilizing Articulate 360, facilitating remote learning and skill development.",
      "Collaborated with academic teams to improve digital learning experiences and accessibility.",
      "Managed technical documentation and streamlined workflows for educational content delivery.",
    ],
  },
  {
    title: "Artificial Intelligence Engineering Intern",
    company_name: "RadicalX",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2023 - January 2024",
    points: [
      "Leveraged technologies such as OpenAI and TensorFlow to develop an AI Dev Manager for enhanced development workflows.",
      "Created algorithms for personalized and adaptive learning systems to improve user engagement and learning outcomes.",
      "Developed robust anti-cheat and fraud detection systems using machine learning techniques.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing platforms.",
    ],
  },
  {
    title: "NOC-Transportation Specialist",
    company_name: "Amazon",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2019 - August 2022",
    points: [
      "Led a team of 26 teammates, overseeing activities and ensuring timely completion of transportation operations.",
      "Generated daily and monthly reports, tracking various metrics related to transportation operations and performance analytics.",
      "Managed payment-related issues, resolving discrepancies and ensuring accurate financial transactions.",
      "Developed standard operating procedures (SOPs) to streamline workflows and enhance operational efficiency.",
      "Established tracking dashboards to monitor transportation operations and implemented automated email systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Austin's technical expertise and problem-solving skills consistently delivered exceptional results in our AI projects.",
    name: "Sarah Johnson",
    designation: "Lead Engineer",
    company: "RadicalX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His ability to manage complex systems and lead teams made a significant impact on our operational efficiency.",
    name: "Michael Chen",
    designation: "Operations Manager", 
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Austin's innovative approach to educational technology transformed our digital learning platform.",
    name: "Dr. Emily Rodriguez",
    designation: "Director",
    company: "Seattle University",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Revv Car Rentals",
    description:
      "Developed a user-friendly car rental website using C#, HTML, CSS, and JavaScript with integrated car comparison functionality, secure booking system, and online payment processing.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pacman AI Project",
    description:
      "Optimized the classic Pacman game by implementing AI algorithms in Python, including A* search, minimax, and expectimax to enhance pathfinding and decision-making capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Heart Disease Prediction",
    description:
      "Utilized machine learning techniques in Python with scikit-learn and pandas to predict heart disease probability with 85% accuracy, contributing to early detection and preventive healthcare measures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "healthcare",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };