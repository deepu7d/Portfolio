import Card from "../components/card";
import Wrapper from "../components/wrapper";
import { CARD_DATA } from "@/constants/index";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <div className="pt-10">
          <h1 className="text-4xl font-bold">{"Hi, I'm Deepanshu"}</h1>
        </div>
        <div>
          <h1 className="pb-10">Projects</h1>
          <div className="flex flex-wrap gap-5 lg:gap-10">
            {CARD_DATA.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
