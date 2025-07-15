import  React from "react";
import { useState,useEffect } from "react";
import { Card } from "../../../card/Card";
import { useLocation } from "react-router";
import { Header } from "../../component/Header/Header";

interface CardProps{
    id: number;
    img: string;
    title: string;
    description: string;
}

const CARD_LIMIT = 10;

export function CardsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || CARD_LIMIT;
    const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(`../../CardForPage.json`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, [limit]);

  return (
    <div className="card-background">
      <Header/>
      <div className="cards__map">
        {cards.map(card => (
          <Card
            id={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}
