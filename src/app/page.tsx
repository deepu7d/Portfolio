import Navbar from "@/components/navbar";
import Card from "../components/card";
import Wrapper from "../components/wrapper";
import { CARD_DATA } from "@/constants/index";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <Navbar />
        <div className="flex flex-col items-center">
          <h1 className="mb-10 inline-block bg-neutral-800/50 p-4 text-2xl shadow-[4px_4px_0px_0px_#ffff]">
            Projects
          </h1>
          <div className="flex flex-wrap justify-center gap-5 p-4 lg:gap-10">
            {CARD_DATA.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
