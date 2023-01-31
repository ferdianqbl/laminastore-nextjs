import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: string;
  active?: boolean;
  href?: string;
}

export default function MenuItem({ title, icon, active, href }: MenuItemProps) {
  return (
    <div className={`item ${active ? "active" : ""} mb-30`}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        alt="icon"
        className="icon me-3"
      />
      <p className="item-title m-0">
        <Link
          href={href ? href : "/member"}
          className="text-lg text-decoration-none"
        >
          {title}
        </Link>
      </p>
    </div>
  );
}
