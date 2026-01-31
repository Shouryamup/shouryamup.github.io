// Portfolio data extracted from resume
export const portfolioData = {
  personal: {
    name: "Shourya Mupparapu",
    title: "Full-Stack Software Developer",
    headline: "Building scalable systems from prototype to production",
    location: "Grand Rapids, MI (Open to Relocate)",
    email: "shouryamup01@gmail.com",
    phone: "+1(352)871-5857",
    linkedin: "linkedin.com/in/shourya-mupparapu",
  },
  
  education: [
    {
      degree: "Master of Science, Computer Science",
      school: "University of Florida",
      location: "Gainesville, FL",
      date: "Dec 2024",
      coursework: ["Advanced Data Structures", "Analysis of Algorithms", "Natural Language Processing", "Data Engineering", "Distributed Operating Systems", "Computer Networks"],
    },
    {
      degree: "Bachelor of Technology, Computer Science",
      school: "Bennett University",
      location: "Delhi, India",
      date: "May 2023",
    },
  ],
  
  skills: {
    languages: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "MATLAB"],
    frontend: ["React", "Angular", "Next.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Spring Boot", "Express.js", "RESTful APIs", "MySQL", "DynamoDB", "Redis"],
    cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git"],
  },
  
  experience: [
    {
      id: "exp_01",
      title: "Software Developer",
      company: "Initech Global",
      location: "Grand Rapids, MI, USA",
      period: "May 2024 – Present",
      highlights: [
        "Engineered reusable React components, improving code modularity and maintainability",
        "Developed scalable, serverless microservices using Next.js and AWS Lambda",
        "Led backend migration from MySQL to DynamoDB and OpenSearch, improving query performance by 40%",
        "Built and optimized Java Spring Boot microservices, reducing operational overhead by 25%",
        "Owned features end-to-end including design, development, testing, and production support",
      ],
    },
    {
      id: "exp_02",
      title: "Software Developer Intern",
      company: "CAW Studios",
      location: "Hyderabad, India",
      period: "Jun 2022 – Dec 2022",
      highlights: [
        "Developed and optimized Node.js backend services with React frontend",
        "Built modular design system and reusable UI components using React and Storybook",
        "Implemented infrastructure as code with AWS CloudFormation and CDK",
        "Designed CRON jobs for automated notifications, boosting user engagement by 20%",
      ],
    },
  ],
  
  projects: [
    {
      id: "proj_01",
      name: "IntelliBank AI",
      tech: ["Agentic AI", "React", "Node.js", "Express.js", "MSSQL", "AWS S3", "Azure OpenAI"],
      period: "Aug 2024 – Dec 2024",
      description: "Architected multi-agent AI system with inter-agent communication using Azure OpenAI and Copilot Studio. Developed full-stack banking intelligence platform with real-time market dashboards and interactive chatbot.",
      image: "intellibank",
    },
    {
      id: "proj_02",
      name: "GatorHive",
      tech: ["React.js", "Node.js", "AWS RDS", "MySQL", "AWS S3", "CloudFront"],
      period: "Jan 2024 – Apr 2024",
      description: "Comprehensive web application for efficient event management. Integrated AWS RDS and S3 for persistent storage and accelerated content delivery using CloudFront.",
      image: "gatorhive",
    },
    {
      id: "proj_03",
      name: "ASL Classification",
      tech: ["Python", "PyTorch", "NumPy", "Deep Learning", "ResNet"],
      period: "Aug 2023 – Dec 2023",
      description: "Led development of ResNet-based deep learning model for American Sign Language classification. Achieved 99.26% test accuracy with near-perfect precision and recall.",
      image: "asl",
    },
  ],
  
  achievements: [
    "AWS Certified: Solution Architect – Associate (SAA-C02)",
    "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    "Bennett Dean's List Scholarship – Fully funded merit-based scholarship",
  ],
  
  leadership: {
    title: "Peer Tutor in Machine Learning",
    organization: "University of Florida",
    period: "Aug 2023 – Nov 2023",
    description: "Led weekly study sessions and one-on-one tutoring for Machine Learning course",
  },
};
