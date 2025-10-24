import {
  IconDots,
  IconMenu2,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import Stories from "./stories";

const PROFILE_STATS = [
  {
    title: "posts",
    count: "18",
  },
  {
    title: "followers",
    count: "230",
  },
  {
    title: "following",
    count: "180",
  },
];

export default function HeaderMobile() {
  return (
    <header className="flex w-full flex-col justify-start md:hidden">
      <div aria-label="bio" className="flex flex-col gap-5 p-4">
        <section className="flex w-full gap-5">
          <section aria-label="profile-pic" className="my-auto">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#FEDA75] via-[#DD2A7B] to-[#8134AF] p-1">
              <div className="h-full w-full rounded-full border-2 border-black bg-white"></div>
            </div>
          </section>
          <section className="text-md flex flex-col items-start justify-center gap-2">
            <h1 className="text-lg font-medium">deepu7d</h1>
            <section>
              <ul className="flex gap-5">
                {PROFILE_STATS.map((stat) => (
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
          <h1 className="font-bold">Deepanshu Saini</h1>
          <h2 className="text-neutral-400">Software Developer</h2>
          <h2>📍Delhi/Ambala</h2>
          <p>
            Developer <span className="text-blue-600">{"@hireme"}</span>
            {"  :("}
          </p>
          <p>I love websockets</p>
          {/* <a href="https://deepudev.xyz">Click here</a> */}
          <p className="pt-4 text-neutral-400">
            Followed by <span className="text-white">Elon Musk</span>
          </p>
        </section>
        <div className="flex gap-2">
          <button className="w-full rounded-lg bg-blue-600 p-1 font-medium">
            Follow
          </button>
          <button className="w-full rounded-lg bg-neutral-800 p-1 font-medium">
            Message
          </button>
        </div>
        <Stories />
      </div>
    </header>
  );
}
