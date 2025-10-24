import { IconDots, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Stories from "./stories";
import { BIO } from "@/constants/bio";
import Buttons from "./buttons";
import Modal from "./modal";

export default function HeaderDesktop() {
  return (
    <header className="hidden items-center justify-center gap-10 md:flex md:flex-col">
      <div className="flex justify-center gap-20">
        <div aria-label="profile-pic" className="my-auto">
          <div className="h-44 w-44 rounded-full bg-gradient-to-br from-[#FEDA75] via-[#DD2A7B] to-[#8134AF] p-1">
            <div className="h-full w-full rounded-full border-2 border-black bg-white"></div>
          </div>
        </div>
        <div aria-label="bio" className="flex flex-col gap-5">
          <section className="flex w-full flex-col gap-5">
            <section className="text-md flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-2xl">{BIO.username}</h1>
                <IconRosetteDiscountCheckFilled className="inline-block h-6 w-6 text-blue-500" />
              </div>
              <Buttons />
              <Modal>
                <IconDots />
              </Modal>
            </section>
            <section>
              <ul className="flex justify-between">
                {BIO.stats.map((stat) => (
                  <li key={stat.title} className="flex gap-1">
                    <span className="font-bold">{stat.count}</span>
                    <span className="text-neutral-400">{stat.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          </section>
          <section className="text-sm">
            <h1 className="font-bold">{BIO.name}</h1>
            <h2 className="text-neutral-400">{BIO.profession}</h2>
            <h2>📍{BIO.location}</h2>
            <p>
              Developer{" "}
              <span className="text-blue-600">{`@${BIO.company}`}</span>
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
        </div>
      </div>

      <section>
        <Stories />
      </section>
    </header>
  );
}
