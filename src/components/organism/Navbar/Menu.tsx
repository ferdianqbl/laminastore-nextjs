import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href?: string;
}

export default function Menu({ title, active, href }: MenuProps) {
  return (
    <li className="nav-item my-auto">
      <Link className={`nav-link${active ? " active" : ""}`} href={href || "/"}>
        {title}
      </Link>
    </li>
  );
}
