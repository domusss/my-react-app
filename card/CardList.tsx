import { useState,useEffect } from "react";
import { Card } from "./Card";
interface CardProps {
    id: number;
    img: string;
    title:string;
    description:string;
} 

export function CardList() {
   const [cards, setCards] = useState<CardProps[]>([]);

useEffect(() => {
  fetch('./Card.json')
    .then(response => response.json())
    .then(data => setCards(data));
}, [])
return (
  <div className="service__card-container">
    {cards.map(card => (
      <Card
        key={card.id}
        id={card.id}
        img={card.img}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
)
}