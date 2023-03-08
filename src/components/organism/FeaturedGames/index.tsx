import axios from "axios";
import { useEffect, useState } from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    axios
      .get("https://laminastore-admin.vercel.app/api/v1/players/landing-page")
      .then((res) => {
        setGameList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {gameList.map((item, index) => (
            <GameItem
              key={index}
              title={item.name}
              category={item.category.name}
              image={`https://laminastore-admin.vercel.app/uploads/voucher/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
