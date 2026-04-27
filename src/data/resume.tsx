import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sourav Pathak",
  initials: "SP",
  url: "https://www.devsourav.online",
  location: "West Bengal, India",
  locationLink: "",
  description:
    "Software Engineer & Mentor | Passionate about building, fixing, and debugging. Always up for tech talk and very active on LinkedIn. ",
  summary: (
    <p className="text-base prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert mt-2">
      Since 10th grade, I&lsquo;ve been passionate about web development and
      coding. In early 2023, I joined{" "}
      <a href="https://www.sharpener.tech/" target="_blank">
        Sharpener
      </a>{" "}
      to learn from mentors—later, I became a Software Engineer and one of the
      most helpful mentors there!
    </p>
  ),
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "SQL",
    "SCSS",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "Redux",
    "Redux Toolkit",
    "React Router",
    "React Native",
    "Express",
    "MySQL",
    "NestJS",
    "Firebase",
    "MongoDB",
    "AWS ( EC2, RDS, Lambda, SQS, S3, API Gateway )",
    "CI/CD (GitHub Actions)",
    "Git",
    "GitHub",
    "Googling",
    "Prompt Engineering",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "devsourav0809@gmail.com",
    tel: "+91 6294543902",
    social: {
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/drive/folders/10K6ZtQeY3RXx94pwTQo7KyM_Q28hiDTY?usp=sharing",
        icon: NotebookIcon,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sourav0809",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devsourav/",
        icon: Icons.linkedin,

        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:devsourav0809@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sharpener",
      href: "https://www.sharpener.tech/",
      badges: [],
      location: "Remote",
      title: "SDE 1",
      logoUrl: "/sharpenerLogo.png",
      start: "Nov 2024",
      end: "Present",
      description: `
              • Built an AI exam evaluation platform using Gemini, Lambda, and SQS that grades over 100 student answer sheets in less than 10 minutes and provides detailed feedback for every student answer and each question.
              • Rebuilt the landing page using Next.js and ShadCN UI, increasing performance score from 40% to over 90%, resulting in better UX, speed, and SEO.
              • Created an Internal PR reviewer using Gemini, LangChain, LangGraph, and LangSmith that automatically checked pull requests and suggested code improvements to speed up and simplify the review process.
              • Built a separate Auth Service using a microservice approach to handle login across multiple products, making authentication easier to manage and scale.
              • Developed a Mentor Activity Tracker to monitor mentor performance, including tracking classes taken, missed, and canceled. Integrated student feedback for live classes and mock interviews, providing mentors with insights to improve. cron jobs for automated tracking.
              • Enabled Zero Downtime Deployment for frontend applications, allowing seamless feature releases and bug fixes without server downtime, ensuring a smooth user experience.
              • Developed an AI-powered communication task by using Google Speech-to-Text, Text-to-Speech, and Gemini, enabling students to practice spoken English and receive real-time, friendly feedback to improve their communication skills.
              • Revamped the Task Page UI/UX, optimizing performance to reduce page load time by 45% and increase user retention by 60% resulting in a smoother and more engaging experience.
              • Added live chat support using Chatwoot with smart routing to connect students to the right agent faster. Also set up alerts using AWS Lambda, SQS, and API Gateway to notify users when an agent replies.
              • Built an Interactive Guide for SnapIt AI Resume Maker with Shepherd.js, reducing onboarding costs by $900 annually.
              • Developed Dynamic Feedback Forms that adapt based on different conditions, ensuring seamless data collection from students. Designed an engaging dashboard with multiple filters to analyze feedback efficiently.
              • Created a Bento Grid Layout for the dashboard — admin can set up the layout and arrange the dashboard cards accordingly.
              • Done the first set of code reviews, fixed bugs, improved existing features, implemented new features, worked on manual testing, etc.`,
    },
    {
      company: "Sharpener",
      href: "https://www.sharpener.tech/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/sharpenerLogo.png",
      start: "March 2024",
      end: "Nov 2024",
      description: `
          • Built a CSS Compiler for students, allowing them to write, test, and visualize CSS code in real-time, making learning more interactive and efficient.
          • Redesigned 25+ admin dashboard pages using Material UI and Tailwind CSS.
          • Migrated the Sharpener mobile app from Expo to React Native CLI, improving performance and stability. Integrated Firebase notifications for real-time alerts.
          • Resolved bugs, enhanced existing features, developed new functionalities, and conducted manual and smoke testing to ensure system reliability.`,
    },
  ],
  education: [
    {
      school: "Sharpener Tech",
      href: "https://www.sharpener.tech/",
      degree: "Web Development (MERN)",
      logoUrl: "/sharpenerLogo.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "K.G Engineering Institute",
      href: "https://polytechnic.wbtetsd.gov.in/kgeibishnupur",
      degree: "Diploma in Electrical Engineering",
      logoUrl: "/college.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Simlapal M.M High School",
      href: "https://school.banglarshiksha.gov.in/ws/website/index/19132004504",
      degree: "Higher Secondary (10+2)",
      logoUrl: "/school.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "OpenChat",
      href: "https://openchat.itssourav.online/",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "An AI-powered chat application with real-time streaming responses, multi-session conversations, and agent-based tools for weather, stocks, and Formula 1 insights. Includes secure GitHub & Google OAuth, persistent chat history, and a clean, responsive UI.",
      technologies: [
        "Next Js",
        "Next Auth",
        "Drizzle ORM",
        "Neon DB",
        "Vercel Agent SDK",
        "TailwindCSS",
        "ShadCN UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://openchat.itssourav.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sourav0809/openchat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/openchat.png",
      video: "",
    },
    {
      title: "RedBubble",
      href: "https://redbubble.vercel.app",
      dates: "Aug 2023 - Sep 2023",
      active: true,
      description:
        "A full-stack e-commerce website with all essential features: user authentication (login & sign-up), shopping cart management (add/remove items), order placement, address selection via Google Maps, order tracking, order history, downloadable invoices, and secure payments. Intractive admin panel to create products, manage orders, and view sales statistics.",
      technologies: [
        "React",
        "Node",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "TailwindCSS",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://redbubble.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sourav0809/Full-stack-Ecommerce-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/redbubble1.png",
      video: "",
    },
    {
      title: "Trackify",
      href: "https://trackify.itssourav.online/",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "A fully responsive and modern analytics dashboard built with Next.js, Tailwind CSS, ShadCN, Redux Toolkit featuring real-time charts, user authentication, and layout customization. The backend is powered by Express, TypeScript, and PostgreSQL.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "Sequelize",
      ],
      links: [
        {
          type: "Website",
          href: "https://trackify.itssourav.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sourav0809/trackify-sales-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/salesDashboard.png",
      video: "",
    },
    {
      title: "Expencify",
      href: "https://expencify.netlify.app/",
      dates: "July 2023 - Aug 2023",
      active: true,
      description:
        "A web app for managing daily expenses and credits with key features like Firebase authentication, expense tracking (add, edit, remove), search & filters, a dashboard with categorized expenses, interactive charts, and VIP features, including downloadable expense and credit reports.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Firebase",
        "Tailwind",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://expencify.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sourav0809/Expencify/tree/Expencify-2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/expencify.png",
      video: "",
    },
    {
      title: "MailMingle",
      href: "https://mailmingle.netlify.app/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "A mailbox client app for sending and receiving emails with Firebase authentication. Features include user-specific inbox, email sending & deletion, a profile page, real-time updates without refresh, and automated mail writing through voice commands.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Firebase",
        "Tailwind",
        "React Router",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mailmingle.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sourav0809/MailBox-Client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mailbox-1.png",
      video: "",
    },
  ],
  recommendations: [
    {
      name: "Kaustubh Bhatter",
      role: "Head of Product and Co-Founder of Sharpener | Ex-Titan (Directi), 123Stores",
      relationship: "Kaustubh managed Sourav directly",
      avatarUrl: "/kaustubh.png",
      linkedinUrl: "https://www.linkedin.com/in/i-kaustubh/",
      recommendation:
        "Sourav worked with us as a developer and stood out for his ownership and execution.\n\nHe was quick to learn, comfortable across the stack, and particularly strong in Generative AI use cases. Give him a problem and he'll figure out a way to ship it.\n\nEasy to work with, proactive, and dependable—I'd recommend him to any team looking for a builder.",
    },
    {
      name: "Yash Prasad",
      role: "Founder at Sharpener | Fixing Education",
      relationship: "Yash managed Sourav directly",
      avatarUrl: "/yash.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/yash-prasad-262457128/",
      recommendation:
        "Sourav was one of our best and sincere developers. Always open to feedback and willingness to learn. He has a great hustle mindset and he worked with great ownership in all his tasks.",
    },
    {
      name: "Rajesh Singha Mahapatra",
      role: "Software Engineer @ VAII | Building AI Products | MERN, AWS, AI Agents",
      relationship: "Rajesh worked with Sourav on the same team",
      avatarUrl: "/rajesh.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/rajeshsmp/",
      recommendation:
        "Sourav and I worked together at Sharpener as SDE-1, and I can say with confidence that he is one of the most dedicated and reliable people I have worked with.\n\nHis expertise in the MERN stack and Generative AI is impressive, and what sets him apart is how quickly he can pick up new things and turn them into real working solutions. He has a natural ability to connect technology with real-world problems in a way that actually makes a difference.\n\nSourav took on AI-first projects and delivered results that directly contributed to Sharpener's 2x growth. He consistently managed multiple features at the same time without ever compromising on quality or commitment.\n\nIf you are looking for someone who is flexible, technically strong, and genuinely passionate about what they build, Sourav is your person. Whether it is product development, system architecture, or infrastructure, he brings the same level of ownership and drive to everything he works on.",
    },
  ],
} as const;
