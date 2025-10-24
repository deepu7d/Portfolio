const STORIES = [
  {
    title: "GYM",
    image: "/stories/gym.png",
  },
  {
    title: "Coding",
    image: "/stories/coding.png",
  },
  {
    title: "Travel",
    image: "/stories/travel.png",
  },
];

export default function Stories() {
  return (
    <ul className="flex gap-5">
      {STORIES.map((story) => (
        <li key={story.title} className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-full bg-neutral-600/50 p-1">
            <div className="h-full w-full rounded-full border-2 border-black bg-white"></div>
          </div>
          <h3>{story.title}</h3>
          {/* <img src={story.image} alt={story.title} /> */}
        </li>
      ))}
    </ul>
  );
}
