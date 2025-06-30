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
  avatarUrl: "/me.png",
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
      end: "Current",
      description: `• Rebuilt the landing page with Next.js and ShadCN UI boosting performance score from 40 to 90+ and
      improving UX, speed, and SEO.
      • Created an Internal PR reviewer using Gemini, LangChain, LangGraph, and LangSmith that automatically
      checked pull requests and suggested code improvements to speed up and simplify the review process.
      • Developed a Mentor Activity Tracker to monitor mentor performance, including tracking classes taken,
      missed, and canceled. Integrated student feedback for live classes and mock interviews, providing mentors
      with insights to improve. cron jobs for automated tracking.
      • Enabled Zero Downtime Deployment for frontend applications, allowing seamless feature releases and bug
      fixes without server downtime, ensuring a smooth user experience.
      • Created an AI-powered communication task using Gemini’s Speech-to-Text and Text-to-Speech, where
      students could practice speaking English and receive real-time, friendly feedback to improve their
      communication.
      • Built a CSS Compiler for students, allowing them to write, test, and visualize CSS code in real-time, making
      learning more interactive and efficient.
      • Revamped the Task Page UI/UX, optimizing performance to reduce page load time by 45 % and increase
      user retention by 60 % resulting in a smoother and more engaging experience.
      • Added live chat support using Chatwoot with smart routing to connect students to the right agent faster.
      Also set up alerts using AWS Lambda, SQS, and API Gateway to notify users when an agent replies.
      • Built an Interactive Guide for SnapIt AI Resume Maker with Shepherd.js, reducing onboarding costs by
      $900 annually.
      • Developed Dynamic Feedback Forms that adapt based on different conditions, ensuring seamless data
      collection from students. Designed an engaging dashboard with multiple filters to analyze feedback efficiently.

      • Created a Bento Grid Layout for the dashboard — admin can set up the layout and arrange the dashboard cards accordingly.

      • Done the first set of code reviews, fixed bugs, improved existing features, implemented new features, worked
      on manual testing, etc.`,
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
      description: `• Built a separate Auth Service using a microservice approach to handle login across multiple products, making
authentication easier to manage and scale.
• Redesigned 25+ admin dashboard pages using Material UI and Tailwind CSS.
• Migrated the Sharpener mobile app from Expo to React Native CLI, improving performance and stability.
Integrated Firebase notifications for real-time alerts.
• Resolved bugs, enhanced existing features, developed new functionalities, and conducted manual and smoke
testing to ensure system reliability.`,
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
    {
      title: "The Generics",
      href: "/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Movie search app with a user-friendly interface. Users can search for movies, view details, and add them to their favorites. The app uses the TMDB API for movie data and Firebase for user authentication and favorites management.",
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
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/movie-1.png",
      video: "",
    },
  ],
} as const;
