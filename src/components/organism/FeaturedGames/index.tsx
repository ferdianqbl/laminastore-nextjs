import { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../../services/data-types";
import { getFeaturedGame } from "../../../../services/player";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;

  const getFeaturedGameList = useCallback(async () => {
    const result = await getFeaturedGame();
    setGameList(result);
  }, [])

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item._id}
              title={item.name}
              category={item.category.name}
              image={`${ROOT_IMG}/voucher/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
