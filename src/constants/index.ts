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
    icon: starbucks, // You can replace with Seattle University logo later
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
    icon: tesla, // You can replace with RadicalX logo later
    iconBg: "#E6DEDD",
    date: "October 2023 - January 2024",
    points: [
      "Leveraged technologies such as OpenAI and TensorFlow to develop an AI Dev Manager for enhanced development workflows.",
      "Created algorithms for personalized and adaptive learning systems to improve user engagement and learning outcomes.",
      "Developed robust anti-cheat and fraud detection systems using machine learning techniques.",
      "Collaborated with cross-functional teams including university students to integrate AI solutions into existing platforms.",
    ],
  },
  {
    title: "Transportation Specialist",
    company_name: "Amazon",
    icon: shopify, // You can replace with Amazon logo later
    iconBg: "#383E56",
    date: "September 2019 - August 2022",
    points: [
      "Led a team of 26 teammates, overseeing their activities and ensuring timely completion of transportation operations.",
      "Generated daily and monthly reports, tracking various metrics related to transportation operations and performance analytics.",
      "Managed payment-related issues, resolving discrepancies and ensuring accurate financial transactions.",
      "Handled termination requests, following established protocols and ensuring smooth offboarding processes.",
      "Developed standard operating procedures (SOPs) to streamline workflows and enhance operational efficiency.",
      "Established tracking dashboards to monitor transportation operations and identify areas for improvement.",
      "Implemented automated email systems, reducing manual effort and improving communication efficiency.",
      "Successfully met delivery targets, contributing to the achievement of overall operational goals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Austin's technical expertise in AI and machine learning consistently delivered exceptional results in our collaborative projects. His ability to work with university teams was outstanding.",
    name: "Talha Sabri",
    designation: "Founder",
    company: "RadicalX",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Austin's leadership skills and systematic approach to transportation operations made a significant impact on our team's efficiency and goal achievement.",
    name: "Anubhav Singla",
    designation: "Program Manager",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Austin's innovative approach to educational technology and documentation transformation has greatly enhanced our student support systems.",
    name: "Chris Fiorello",
    designation: "Assistant Dean of Students, Care & Support",
    company: "Seattle University",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

// Updated with your real GitHub projects
const projects = [
  {
    name: "AI Question-Answer Generation App",
    description:
      "Advanced AI-powered application that generates intelligent question-answer pairs using natural language processing. Built with modern AI frameworks to enhance learning and content creation workflows.",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ausmatths/Question-Answer-Generation-App",
  },
 {
  name: "Hiker Connect",
  description:
    "Social platform connecting hiking enthusiasts with trail recommendations, group formation, and safety features. Includes real-time location sharing and community-driven trail reviews with interactive maps and weather integration.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "Social",
      color: "pink-text-gradient",
    },
  ],
  image: jobit,
  source_code_link: "https://github.com/ausmatths/hiker_connect",
},
  {
    name: "Heart Disease Prediction System",
    description:
      "Machine learning model achieving 85% accuracy in predicting heart disease risk based on patient parameters. Implements logistic regression with scikit-learn for early detection and preventive healthcare.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
      {
        name: "Healthcare",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ausmatths/Heart-Disease-Prediction-Clone",
  },
  {
    name: "AI Pacman Projects",
    description:
      "Enhanced classic Pacman game with AI algorithms including A* search, minimax, and expectimax for intelligent pathfinding and strategic decision-making. Optimized for performance and player engagement.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI-Algorithms",
        color: "green-text-gradient",
      },
      {
        name: "GameDev",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ausmatths/AI-Pacman-Projects",
  },
  {
    name: "Workout Tracker",
    description:
      "Comprehensive fitness tracking application with exercise logging, progress monitoring, and personalized workout recommendations. Features intuitive UI and data visualization for fitness goals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Fitness",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ausmatths/Workout_Tracker",
  },
  {
    name: "Admin Dashboard",
    description:
      "Modern, responsive admin dashboard with real-time analytics, user management, and data visualization. Built with contemporary web technologies for optimal performance and user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Dashboard",
        color: "green-text-gradient",
      },
      {
        name: "Analytics",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ausmatths/admin-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };