import { CardProps } from "@/components/card";

export const CARD_DATA: CardProps[] = [
  {
    title: "MapWise",
    description:
      "A web app to coordinate meetups with real-time location sharing and chat.",
    github: "https://github.com/deepu7d/mapWise",
    demo: "https://map.deepudev.xyz",
    completed: false,
    image: "/projects/mapwise.jpeg",
    techStack: [
      "Next.js",
      "Express",
      "Socket.io",
      "Maplibre-gl",
      "Turborepo",
      "Prisma",
      "PostgreSQL",
      "Redux",
    ],
  },
  {
    title: "Cool UI",
    description:
      "A collection of Framer Motion-powered React components, installable via the shadcn CLI.",
    github: "https://github.com/deepu7d/Cool-UI",
    demo: "https://ui.deepudev.xyz/",
    completed: false,
    techStack: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS", "Shadcn"],
    image: "/projects/cool-ui.jpeg",
  },
  {
    title: "Mystery Lnk",
    description: "A web app to send anonymous messages via links.",
    github: "https://github.com/deepu7d/Mystery-Link",
    demo: "https://mystery-lnk.vercel.app/",
    completed: true,
    techStack: ["Next.js", "MongoDB", "Mongoose", "NextAuth.js", "Resend"],
    image: "/projects/mystery-lnk.jpeg",
  },
  {
    title: "Planet Game",
    description: "A 2D shooter game built using p5.js.",
    github: "https://github.com/deepu7d/PlanetGame",
    demo: "https://deepu7d.github.io/PlanetGame/",
    completed: true,
    techStack: ["p5.js", "JavaScript", "HTML", "CSS", "WebGL", "OOP"],
    image: "/projects/mystery-lnk.jpeg",
  },
  {
    title: "SolarWise",
    description:
      "Predicts solar energy generation over time and estimates your savings.",
    github: "https://github.com/RakshitRabugotra/solarwise",
    demo: "https://solarwise-henna.vercel.app/",
    completed: true,
    techStack: ["Next.js", "React-leaflet", "Flask", "ML"],
    image: "/projects/mapwise.jpeg",
  },
  {
    title: "Notes App 😢",
    description: "A simple notes app built using React and Supabase.",
    github: "https://github.com/deepu7d/Notes-App",
    demo: "https://notes-app-deepanshu.vercel.app/",
    completed: true,
    techStack: ["React", "Supabase", "React Router", "Vanilla CSS"],
    image: "/projects/notes-app.jpeg",
  },
];
