import GameItem from "../../molecules/GameItem";

export default function FeaturedGames() {
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
          <GameItem title="Super Mechs" category="Mobile" image="Thumbnail-1" />
          <GameItem
            title="Call of Duty: Modern"
            category="Mobile"
            image="Thumbnail-2"
          />
          <GameItem
            title="Mobile Legends"
            category="Mobile"
            image="Thumbnail-3"
          />
          <GameItem
            title="Clash of Clans"
            category="Mobile"
            image="Thumbnail-4"
          />
          <GameItem title="Valorant" category="Desktop" image="Thumbnail-5" />
        </div>
      </div>
    </section>
  );
}
