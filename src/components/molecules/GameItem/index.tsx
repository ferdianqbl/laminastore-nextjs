import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  title: string;
  category: string;
  image:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}

export default function GameItem({ title, category, image }: GameItemProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            src={`/img/${image}.png`}
            width="205"
            height="270"
            alt={category}
            className="thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/console.svg"
                width={54}
                height={36}
                alt="console-ic"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
