import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.png";

// export const HERO_CONTENT = `Welcome to my portfolio! I'm Afia, a software developer enthusiast, exploring the path of full-stack development, by growing my skills in both front-end and back-end technologies with a strong passion for programming. This space is dedicated to showcasing my work, skills, and creative journey. Here, you'll find a collection of my projects, each reflecting my dedication and expertise. Whether you're here to explore my portfolio or get in touch, I hope you find something that inspires you. Thank you for visiting, and I look forward to connecting with you!`;
export const HERO_CONTENT = `Welcome to my portfolio! I'm Afia, an AI engineer and software developer, exploring the path of research and development, by growing my skills with a strong passion for programming. This space is dedicated to showcasing my work, skills, and creative journey. Here, you'll find a collection of my projects, each reflecting my dedication and expertise. Whether you're here to explore my portfolio or get in touch, I hope you find something that inspires you. Thank you for visiting, and I look forward to connecting with you!`;
export const ABOUT_TEXT = `Welcome to my portfolio! I am a highly motivated and dedicated individual with a passion for continuous learning and personal development. With a strong work ethic and commitment to achieving my goals, I thrive on taking on new challenges and quickly adapting to diverse environments.`;
export const ABOUT_TEXT2 = `In my free time, I enjoy reading, exercising, and spending quality time with friends and family. I am always seeking new adventures and experiences that broaden my perspective and enrich my personal growth.`;
export const ABOUT_TEXT3 = `I am eager to connect with you and welcome any feedback that can help me improve further. Let's engage in a conversation about what makes each of us unique and explore opportunities for growth and collaboration.`;

export const EXPERIENCES = [
  {  
    year: "July 2025 - Present",
    role: "AI Engineer",
    company: "PowerInAI",
    description: `Build an N8N-integrated MCP chatbot with intent detection, large-scale contextual retrieval knowledge base and workflows using contextual chunking, embeddings and reranking. Testing of the chatbot.`,
    technologies: ["N8N", "MCP Server", "Contextual Chunking", "RAG", "Contextual Retrieval"],
  },
];

export const PUBLICATIONS = [
  {
    year: "18 December, 2024",
    description: `Revolutionizing rose grading: Real-time detection and accurate assessment with yolov8 and deep learning models.`,
    publisher: "Springer Nature",
    journal: "SN Computer Science",
    role: "First Author",
    scopus_index: "Q1 | SCImago Index: Q2", 
    impact_factor: "3.7 | CiteScore: 5.6",   
    link: "https://link.springer.com/article/10.1007/s42979-024-03556-z"
  },
  {
    year: "29 October, 2025",
    description: `PomNet: Diffusion Guided Data Augmentation and Graph Convolution for Enhanced Pomegranate Disease Classification.`,
    publisher: "Elsevier",
    journal: "Journal of Agriculture and Food Research",
    role: "First Author",
    scopus_index: "Q1 | SCImago Index: Q1", 
    impact_factor: "6.2 | CiteScore: 7.5",
    submitted_paper: "29 October, 2025"
  },

];

export const PROGRAMMING = [ 
  {
    year: "JUN 2024",
    team_name: "UAP_Tenacious_Titans",
    description: `EEE Tech Fest Inter Department Programming Contest 2024`,
    rank: "6th",
  },

  {
    year: "APR 2024",
    team_name: "UAP_Amogus",
    description: `IUT 11th National ICT Fest Programming Contest 2024`,
    rank: "79th",
  },

  {
    year: "JAN 2024",
    team_name: "UAP_Tenacious_Titans",
    description: `UAP Inter University Collaborative Programming Contest 1.0 (Senior)`,
    rank: "25th",
  },

  {
    year: "MAR 2023",
    team_name: "UAP_Tenacious_Titans",
    description: `EEE Tech Fest 1.0 Presents Intra University Programming Contest -2023`,
    rank: "9th",
  },

  {
    year: "Sep 2022",
    team_name: "UAP_Amogus",
    description: `Intra University Hackathon - 2022`,
    rank: "10th",
  },

  {
    year: "APR 2022",
    team_name: "UAP_Trinity",
    description: `UAP Intra University Programming Contest Junior - 2022`,
    rank: "7th",
  },

];

export const EDUCATION = [
  {
    GPA: `CGPA: 3.86 / 4.00 (2nd Position in batch)`,
    // year: `Passing Year: June, 2025`,
    degree: `B.Sc in Computer Science and Engineering`,
    institution: `University of Asia Pacific`,
    other: `Duration: 4 years`,
  },
 
  {
    GPA: `GPA: 4.25 (out of 5.00)`,
    // year: `Passing Year: 2018`,
    degree: `Higher Secondary Certificate (HSC)`,
    institution: `Holy Cross College`,
    other: `Group: Science, Board: Dhaka`,
  },

  {
    GPA: `GPA: 5.00 (out of 5.00)`,
    // year: `Passing Year: 2016`,
    degree: `Secondary School Certificate (SSC)`,
    institution: `Mohammadpur Preparatory School and College`,
    other: `Group: Science, Board: Dhaka`,
  },
];

export const AWARDS = [
  {
    year: "First Year First Semester",
    description: `Dean's Honour Award Spring - 21`,
  },

  {
    year: "First Year Second Semester",
    description: `Vice Chancellor's Honor Award Fall - 21`,
  },

  {
    year: "Second Year First Semester",
    description: `Dean's Honour Award Spring - 22`,
  },

  {
    year: "Second Year Second Semester",
    description: `Dean's Honour Award Fall - 22`,
  },

  {
    year: "Third Year First Semester",
    description: `Dean's Honour Award Spring - 23`,
  },

  {
    year: "Third Year Second Semester",
    description: `Dean's Honour Award Fall - 23`,
  },

  {
    year: "Fourth Year First Semester",
    description: `Dean's Honour Award Spring - 24`,
  },

  {
    year: "Fourth Year Second Semester",
    description: `Vice Chancellor's Honor Award Fall - 24`,
  },

];

export const PROJECTS = [
  {
    title: "CRUD App using React, Node.js, Tailwind CSS, Express.js & PostgreSQL",
    image: project8,
    description:   
      "A CRUD-based web application that allows users to create, view, update, and delete records. It includes functionalities such as data entry forms, dynamic record display, real-time editing, and deletion with confirmation message.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Express.js", "PostgreSQL", "JavaScript"],
    link: "https://github.com/afia25/React-Tailwind-Node-PostgreSQL-Express-CRUD",
  },
  {
    title: "Crowdfunding Platform with Integrated Software Testing",
    image: project2,
    description: 
      "A smart blockchain-based crowdfunding platform (Web Application) can become a source of money for a project by asking many contributors to donate a small amount to it individually. People using this platform can crowdfund for just about anything.",
    technologies: ["Python", "Django", "SQL", "Selenium", "HTML", "CSS"],
    link: "https://github.com/afia25/Crowdfunding-Platform-with-Integrated-Software-Testing",
  },
  {
    title: "Machine Learning Based Diabetes Prediction and Doctor Appointment System",
    image: project1,
    description: 
      "A Machine Learning Based Diabetes Prediction and Doctor Appointment System predicts diabetes risk using patient data and allows users to book doctor appointments. Features include user registration, health data input, prediction results, appointment scheduling, cancelling appointment.",
    technologies: ["Machine Learning", "Django", "SQL", "Python", "HTML", "CSS"],
    link: "https://github.com/afia25/Machine-Learning-Based-Diabetes-Prediction-and-Doctor-Appointment-System",
  },
  {
    title: "Inventory Management System with Automated Web Testing using Python and Selenium",
    image: project4,
    description: 
      "An Inventory Management System with Automated Web Testing streamlines product tracking, stock updates, supplier management, and sales monitoring. The system ensures accuracy and efficiency through real-time inventory control and automated testing to validate core functionalities across workflows.",
    technologies: ["Selenium", "SQL", "Python", "Django", "HTML", "CSS"],
    link: "https://github.com/afia25/Inventory-Management-System-with-Automated-Web-Testing-using-Python-and-Selenium",
  },
  {
    title: "Employee Management System using Java",
    image: project6,
    description:   
      "An Employee Management System using Java manages employee records, attendance, departments, and salary details. It enables functionalities like employee registration, role assignment, performance tracking, and payroll processing, ensuring efficient workforce management.",
    technologies: ["Java", "JavaFX", "Object-Oriented Programming (OOP)", "C++", "CSS"],
    link: "https://github.com/afia25/Employee-Management-System-using-Java",
  },
  {
    title: "Computer Vision Based Pose Estimation",
    image: project3,
    description:   
      "A real-time vision-based system was developed to detect human joints from videos and evaluate pose using pose estimation techniques, helping users perform exercises correctly by comparing predicted postures with ideal reference models.",
    technologies: ["Computer Vision", "Machine Learning", "Python", "OpenCV"],
    link: "https://github.com/afia25/Computer-Vision-Based-Pose-Estimation",
  },
  {
    title: "Healthcare Information Management System using SQL",
    image: project7,
    description: 
      "A database system using SQL that manages patient records, doctor details, appointments, and medical histories. It includes multiple tables with relations among them to streamline healthcare operations, ensuring efficient access to critical medical information.",
    technologies: ["SQL", "XAMPP", "ER Diagram Tool"],
    link: "https://github.com/afia25/Healthcare-Information-Management-System-using-SQL",
  },
];

export const CONTACT = {
  address: "46/C, Asad Avenue, Mohammadpur, Dhaka-1207",
  phoneNo: "+88 01782368594",
  email: "afia6402@gmail.com",
};
