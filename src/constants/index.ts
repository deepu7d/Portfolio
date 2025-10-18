import { CardProps } from "@/components/card";

export const CARD_DATA: CardProps[] = [
  {
    title: "MapWise",
    description:
      "A web app to coordinate meetups with real-time location sharing and chat.",
    github: "https://github.com/deepu7d/mapWise",
    demo: "https://map.deepudev.xyz",
    status: false,
    techStack: [
      "Next.js",
      "Express",
      "Socket.io",
      "Maplibre-gl",
      "Turborepo",
      "Prisma",
    ],
  },
  {
    title: "Cool UI",
    description: "A collection react components built using Framer Motion.",
    github: "https://github.com/deepu7d/Cool-UI",
    demo: "https://ui.deepudev.xyz/",
    status: false,
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Shadcn"],
  },
  {
    title: "Mystery Lnk",
    description: "A web app to send anonymous messages via links.",
    github: "https://github.com/deepu7d/Mystery-Link",
    demo: "https://mystery-lnk.vercel.app/",
    status: true,
    techStack: ["Next.js", "MongoDB", "NextAuth.js", "Mongoose", "Resend"],
  },
  {
    title: "Planet Game",
    description: "A 2D shooter game built using p5.js.",
    github: "https://github.com/deepu7d/PlanetGame",
    demo: "https://deepu7d.github.io/PlanetGame/",
    status: true,
    techStack: ["p5.js", "JavaScript", "HTML", "CSS", "WebGL"],
  },
];
