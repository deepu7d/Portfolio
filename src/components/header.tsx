import { IconDots, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";

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

export default function Header() {
  return (
    <header className="flex justify-center gap-10">
      <div aria-label="profile-pic" className="my-auto">
        <div className="h-44 w-44 rounded-full bg-gradient-to-br from-[#FEDA75] via-[#DD2A7B] to-[#8134AF] p-1">
          <div className="h-full w-full rounded-full border-2 border-black bg-white"></div>
        </div>
      </div>
      <div aria-label="bio" className="flex flex-col gap-5">
        <section className="flex w-full flex-col gap-5">
          <section className="text-md flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl">deepu7d</h1>
              <IconRosetteDiscountCheckFilled className="inline-block h-6 w-6 text-blue-500" />
            </div>
            <div className="flex gap-2">
              <button className="w-24 rounded-lg bg-blue-600 p-1 font-medium">
                Follow
              </button>
              <button className="w-24 rounded-lg bg-neutral-800 p-1 font-medium">
                Message
              </button>
            </div>
            <IconDots />
          </section>
          <section>
            <ul className="flex justify-between">
              {PROFILE_STATS.map((stat) => (
                <li key={stat.title} className="flex gap-1">
                  <span className="font-bold">{stat.count}</span>
                  <span className="text-neutral-400">{stat.title}</span>
                </li>
              ))}
            </ul>
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
      </div>
    </header>
  );
}
