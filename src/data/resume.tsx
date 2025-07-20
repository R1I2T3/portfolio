import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ritesh Jha",
  initials: "RJ",
  url: "https://riteshjha.dev",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Full-stack developer passionate about building scalable web and mobile applications. Experienced in leading teams and optimizing performance for real-time, data-driven solutions.",
  summary:
    "Currently pursuing a Bachelor's degree in Information Technology at Thakur College of Engineering and Technology, I specialize in full-stack development with expertise in React, Next.js, Django, and Go. I have led development teams to deliver impactful projects, including a college placement portal and real-time collaborative applications. My focus is on creating efficient, user-centric solutions with a strong emphasis on performance optimization and scalability.",
  avatarUrl: "/ritesh.png",
  skills: [
    "Javascript",
    "Typescript",
    "Python",
    "Go",
    "React",
    "Next.js",
    "Express.js",
    "Django",
    "FastAPI",
    "Hono.js",
    "React Native",
    "Redux Toolkit",
    "Mongoose",
    "Prisma",
    "Drizzle",
    "Tanstack Query",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "PostgreSQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "jhar27018@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/r1i2t3",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ritesh20/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RiteshJha960712",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jhar27018@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "WeSee",
      href: "https://www.linkedin.com/company/wesee-agi/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/wesee.png",
      start: "Feb 2025", // Replace with actual start date
      end: "March 2025", // Replace with actual end date or "Present"
      description:
        "- Developed an interactive event calendar for the Suzuka Circuit F1 events using Next.js, enabling visualization of overlapping events with a dynamic and user-friendly interface.Implemented responsive frontend components to enhance user experience, ensuring seamless event scheduling and display across devices.\n",
    },
    {
      company: "Loomerang",
      href: "https://www.linkedin.com/company/loomerang-usa/",
      badges: [],
      location: "Remote",
      title: "Frontend Consultant",
      logoUrl: "/loomerang.png",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "Developed key frontend components using Next.js to enhance user experience. Built a mobile version of the application, increasing reach by 60%. Contributed to a web workspace for clothing design, improving usability and streamlining user interactions.",
    },
    {
      company: "Dinosys Infotech Pvt. LTD",
      href: "https://www.linkedin.com/company/dinosys-infotech/about/",
      badges: [],
      location: "Remote, Mumbai",
      title: "Software Developer Intern",
      logoUrl: "/dinosys.png",
      start: "Dec 2023",
      end: "Apr 2024",
      description:
        "Assisted in developing an OSINT social profiling application, enhancing data analysis capabilities. Optimized application performance, reducing load times by 25%. Scraped social data from 50 websites and 10 applications, contributing to 33% of total data aggregation.",
    },
  ],
  education: [
    {
      school: "Thakur College of Engineering and Technology",
      href: "https://tcetmumbai.in",
      degree: "Bachelor of Information Technology (CGPA: 9.6)",
      logoUrl: "/tcet.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "T&P Task Automation",
      active: true,
      description:
        "Led a team of 12 developers to build a portal for the college placement cell, reducing manual tasks by 60%. Designed the entire system from scratch, including dashboards for students, faculty, and clerks. Deployed the system on a college server using IIS and Windows Server.",
      technologies: ["Python", "FastAPI", "Django", "React", "PostgreSQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/R1I2T3/t_and_p_task_automation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Codoc",
      active: true,
      description:
        "Developed a real-time collaborative document editing platform using Next.js and WebSockets. Implemented concurrent editing for multiple users with real-time updates. Integrated a notification system for document changes and access modifications.",
      technologies: ["Next.js", "Liveblocks", "WebSockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/R1I2T3/CoDoc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RChat",
      active: true,
      description:
        "Built a scalable real-time chat application using the MERN stack. Utilized WebSockets and Socket.io for low-latency messaging. Integrated TanStack Query for efficient server state management and data synchronization.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "WebSockets",
        "Socket.io",
        "Tanstack Query",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/R1I2T3/Chat_App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
