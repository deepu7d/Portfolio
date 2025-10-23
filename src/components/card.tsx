import type { SVGProps } from "react";

export type CardProps = {
  title: string;
  description: string;
  github: string;
  demo: string;
  completed: boolean;
  techStack: string[];
};

export default function Card({
  title,
  description,
  github,
  demo,
  completed,
  techStack,
}: CardProps) {
  return (
    <article className="flex w-full flex-col border border-neutral-200 bg-white shadow-md shadow-slate-900/50 transition-shadow duration-300 hover:shadow-lg md:w-lg dark:border-neutral-800 dark:bg-neutral-900/50">
      {/* ====== Iframe Preview Section ====== */}
      <iframe src={demo} height={400}></iframe>
      {/* ====== Content Section ====== */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-4 md:gap-0">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <div className="flex shrink-0 items-center gap-4">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  completed
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                }`}
              >
                {completed ? "Completed" : "In Progress"}
              </span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} on GitHub`}
                className="rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} Demo`}
                className="rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
  </svg>
);

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);
