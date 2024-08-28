import project1 from "../assets/projects/mta.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/erp.jpg";
import project4 from "../assets/projects/nlp.jpeg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Hello! I'm Nisa Yurdagül, a software engineer. With expertise in the Software Development Life Cycle (SDLC), Software Test Life Cycle (STLC), and Agile/Scrum methodologies, I specialize in creating custom automation frameworks using PHP and Java. My experience spans developing efficient software solutions using PHP CodeIgniter, JavaScript, HTML, CSS, Flutter, MySQL, Docker, and Kubernetes. Driven by a passion for continuous learning, I am committed to delivering innovative projects. Let's connect if you're looking to elevate your software development!`;

export const ABOUT_TEXT = `I am Nisa Yurdagül, a passionate software engineer with a solid foundation in the Software Development Life Cycle (SDLC) and a strong commitment to Agile/Scrum methodologies. With a degree in Software Engineering from Ostim Technical University and hands-on experience in diverse projects. Throughout my career, I have developed a range of software solutions, from transforming manual processes into efficient, automated systems, to building cross-platform mobile and web applications. `;

export const ABOUT_TEXT_2 = `My experience includes working as a business analyst for the MTA Corporate-Based Project Tracking System, where I honed my skills in gathering and analyzing business requirements, documenting detailed process flows, and ensuring industry-standard compliance. In addition to my project work, I have a deep understanding of various programming languages such as C, C++, C#, Java, Python, and PHP, and I am skilled in using development tools like Docker, Kubernetes, Git, and more.`;


export const ABOUT_TEXT_3 = `My technical expertise is complemented by my ability to adapt and continuously learn, allowing me to effectively tackle challenging tasks and drive successful outcomes. I am excited to bring my problem-solving skills and initiative to new opportunities, contributing to innovative projects and making a meaningful impact in the tech industry.`;


export const EXPERIENCES = [
  {
    year: "03/2024 - Present",
    role: "Software Developer",
    company: "İnosas",
    description: `Developing and maintaining web applications using PHP CodeIgniter. Conducting performance and load testing to ensure the robustness of web solutions. Also, playing a crucial role as a business analyst by gathering, analyzing, and documenting business requirements to optimize development processes.`,
    technologies: [
      "PHP", 
      "CodeIgniter", 
      "JavaScript", 
      "HTML", 
      "CSS", 
      "AJAX", 
      "JSON", 
      "Docker", 
      "Kubernetes", 
      "Linux", 
      "Elasticsearch", 
      "MySQL", 
      "Git"
    ],
  },
  {
    year: "01/2024 - 02/2024",
    role: "Part-Time Position",
    company: "Ostim Technical University IT Department",
    description: `Installed and configured Linux using Manjaro Plasma distribution on personal computers. Set up and optimized the Odoo web server on Virtual Machine Manager, and configured the Proxmox Mail Gateway for enhanced email server efficiency.`,
    technologies: [
      "Linux", 
      "Manjaro Plasma", 
      "Odoo", 
      "Virtual Machine Manager", 
      "Proxmox Mail Gateway"
    ],
  },
  {
    year: "01/2022 - 02/2024",
    role: "Software Development Intern",
    company: "İnosas",
    description: `Completed a two-year internship where I designed PHP-based projects and developed interactive web pages using HTML, CSS, JavaScript, AJAX, and JSON. Managed multi-server deployment using Docker and Kubernetes on Linux servers, and optimized data indexing and search capabilities using Elasticsearch.`,
    technologies: [
      "PHP", 
      "CodeIgniter", 
      "JavaScript", 
      "HTML", 
      "CSS", 
      "AJAX", 
      "JSON", 
      "Docker", 
      "Kubernetes", 
      "Linux", 
      "Elasticsearch"
    ],
  }
];


export const PROJECTS = [
  {
    title: "MTA Corporate-Based Project Tracking System",
    image: project1,
    description:
      "Served as a business analyst for the MTA Corporate-Based Project Tracking System, responsible for gathering and analyzing business requirements, documenting detailed process flows, and ensuring compliance with industry standards.",
    technologies: ["Business Analysis", "Process Documentation", "Compliance"],
  },
  {
    title: "ERP Project",
    image: project3,
    description:
      "Transformed a company's part procurement and order module from Excel into an efficient software solution using PHP CodeIgniter, enhancing manageability and dynamic user interactions.",
    technologies: ["PHP CodeIgniter", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Mobile Education Support System",
    image: project2,
    description:
      "Developed a Mobile Education Support System for both web and mobile platforms. Created the web interface using PHP CodeIgniter and the mobile application using Flutter, with seamless interaction via Restful APIs.",
    technologies: ["PHP CodeIgniter", "Flutter", "Restful APIs", "MySQL"],
  },
  {
    title: "NLP Data Mining Algorithm Project",
    image: project4,
    description:
      "Developed a project utilizing an NLP data mining algorithm to find keywords in a text and provide summaries, improving text analysis and information retrieval.",
    technologies: ["NLP", "Data Mining", "Algorithm Development"],
  },
  {
    title: "İnosas Projects",
    image: project5,
    description:
      "Developed various projects using PHP CodeIgniter and conducted load tests to enhance performance. Acted as a business analyst to gather, analyze, and document business requirements.",
    technologies: ["PHP CodeIgniter", "Load Testing", "Business Analysis","Apache JMeter"],
  },
];


export const CONTACT = {
  address: "Ankara/Turkey",
  phoneNo: "+90 (541) 430 0104 ",
  email: "hayrun-nisayur@hotmail.com",
};
