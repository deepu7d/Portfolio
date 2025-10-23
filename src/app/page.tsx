import { CARD_DATA } from "@/constants";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
      {CARD_DATA.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
