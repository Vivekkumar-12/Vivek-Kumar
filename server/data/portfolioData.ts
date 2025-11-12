import type { PortfolioData } from '@shared/schema';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Vivek Kumar',
    title: 'Full-Stack Developer',
    tagline: 'Passionate about building modern web applications with MERN Stack. Experienced in creating scalable solutions and learning cutting-edge technologies.',
    email: 'vivekkumar14052005@gmail.com',
    phone: '+91-8651064680',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-b19aa5299/',
    github: 'https://github.com/Vivekkumar-12',
    location: 'Punjab, India',
    cgpa: '7.45',
  },
  skills: [
    {
      category: 'Languages',
      skills: ['Java', 'C++', 'JavaScript', 'Python', 'PHP'],
    },
    {
      category: 'Frameworks',
      skills: ['HTML', 'CSS', 'Node.js', 'React.js', 'Express.js'],
    },
    {
      category: 'Tools/Platforms',
      skills: ['Excel', 'VS Code', 'Git', 'GitHub'],
    },
    {
      category: 'Database Management',
      skills: ['MySQL', 'SQL', 'MongoDB'],
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership', 'Passionate', 'Teamwork', 'Communication Skills', 'Adaptability'],
    },
  ],
  projects: [
    {
      id: 'job-tracker',
      title: 'Job Application Tracker',
      period: 'June 2025 – July 2025',
      description: [
        'Built a website using MERN Stack for searching job opportunities',
        'One can apply for them and add them in the list along with status like passed the exam, interviewed, etc.',
        'Implemented full CRUD operations with MongoDB for data persistence',
      ],
      technologies: ['HTML', 'CSS', 'MongoDB', 'React.js', 'Node.js', 'Express.js'],
      featured: true,
    },
    {
      id: 'hospital-management',
      title: 'Hospital Management System',
      period: 'Feb 2025 – May 2025',
      description: [
        'Built a complete website for managing the hospital and customer data',
        'It enhanced the efficiency and coordination in the treatment of patient by doctor',
        'Implemented user authentication and role-based access control',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    },
    {
      id: 'ai-sentiment',
      title: 'AI Brand Sentiment Analyzer',
      period: 'Feb 2025 – May 2025',
      description: [
        'Built a website for brand sentiment analysis with the help of API',
        'One can search the sentiment of specific brand by their name',
        'Integrated third-party API for real-time sentiment analysis',
      ],
      technologies: ['HTML', 'CSS', 'Python'],
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      period: 'Sept 2023 – Dec 2023',
      description: [
        'Build front end of fruits and vegetables selling website',
        'It has login, search, feedback, and logout features',
        'Responsive design optimized for mobile and desktop',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'sustainable-dev',
      title: 'Website on Sustainable Development',
      period: 'Sept 2023 – Dec 2023',
      description: [
        'Built a knowledge seeking website based on sustainable development',
        'People can learn about different sustainable resources and developments',
        'Educational content with interactive elements',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
  education: [
    {
      id: 'btech',
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      location: 'Punjab, India',
      period: 'Since August 2023',
      score: 'CGPA: 7.45',
    },
    {
      id: 'intermediate',
      institution: 'R.R.Sah College',
      degree: 'Intermediate',
      location: 'Raxaul, Bihar',
      period: 'April 2020 - March 2022',
      score: 'Percentage: 66.2%',
    },
    {
      id: 'matriculation',
      institution: 'Cambridge Public School',
      degree: 'Matriculation',
      location: 'Raxaul, Bihar',
      period: 'April 2019 - March 2020',
      score: 'Percentage: 82.6%',
    },
  ],
  training: [
    {
      id: 'fullstack-training',
      title: 'Full-Stack Development - Self Paced',
      institution: 'CipherSchools',
      period: 'June 2025 - July 2025',
      description: [
        'Completed structured course covering basic to advanced MERN Stack concepts and project',
        'Learned new frameworks like React.js, Express.js and MongoDB database',
        'Built a MERN project on Job application tracker and earned certification',
      ],
    },
  ],
  certificates: [
    {
      id: 'fullstack-cert',
      title: 'Full Stack Development',
      institution: 'CipherSchools',
      date: 'July 2025',
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true,
      certificate: "/certificates/mern_stack.pdf" // 👈 path inside /public/
    },
    {
      id: 'java-cert',
      title: 'Java Language',
      institution: 'Iamnoe',
      date: 'May 2025',
    },
    {
      id: 'social-networks',
      title: 'Social Networks',
      institution: 'NPTEL (IIT Madras)',
      date: 'April 2025',
    },
    {
      id: 'cpp-cert',
      title: 'C++ Language',
      institution: 'Iamnoe',
      date: 'Dec 2024',
    },
    {
      id: 'hardware-os',
      title: 'Introduction to Hardware and Operating Systems',
      institution: 'Coursera',
      date: 'Sept 2024',
    },
    {
      id: 'networking',
      title: 'The Bits and Bytes of Computer Networking',
      institution: 'Coursera',
      date: 'Sept 2024',
    },
    {
      id: 'product-mgmt',
      title: 'Product Management',
      institution: 'Udemy',
      date: 'Oct 2023',
    },
  ],
  achievements: [
    {
      id: 'hackathon',
      title: 'Hackathon – Code-A-Hunt',
      date: 'Feb 2024',
      description: [
        'Duration: 24 Hours',
        'Held by Coding Blocks LPU',
        'My team ranked 15 out of 200 teams',
      ],
    },
  ],
};
