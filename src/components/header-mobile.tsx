import Buttons from "./buttons";
import Stories from "./stories";
import { BIO } from "@/constants/bio";

export default function HeaderMobile() {
  return (
    <header className="flex w-full flex-col justify-start md:hidden">
      <div aria-label="bio" className="flex flex-col gap-2 p-4">
        <section className="flex w-full gap-5">
          <section aria-label="profile-pic" className="my-auto">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#FEDA75] via-[#DD2A7B] to-[#8134AF] p-1">
              <div className="h-full w-full rounded-full border-2 border-black bg-white"></div>
            </div>
          </section>
          <section className="text-md flex flex-col items-start justify-center gap-2">
            <h1 className="text-lg font-medium">{BIO.name}</h1>
            <section>
              <ul className="flex gap-5">
                {BIO.stats.map((stat) => (
                  <li
                    key={stat.title}
                    className="flex flex-col items-start justify-center"
                  >
                    <span className="font-bold">{stat.count}</span>
                    <span className="text-neutral-400">{stat.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
        <section className="text-sm">
          <h2 className="text-neutral-400">{BIO.profession}</h2>
          <h2>📍{BIO.location}</h2>
          <p>
            Developer <span className="text-blue-600">{`@${BIO.company}`}</span>
            {"  :("}
          </p>
          {BIO.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <p className="pt-4 text-neutral-400">
            Followed by{" "}
            <span className="text-white">{BIO.followedBy.join(", ")}</span>
          </p>
        </section>
        <Buttons className="w-full" />
        <Stories />
      </div>
    </header>
  );
}
