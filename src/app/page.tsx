import { CARD_DATA } from "@/constants/projects";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      {CARD_DATA.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
