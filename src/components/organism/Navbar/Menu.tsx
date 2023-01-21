import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href?: string;
  isDropdown?: boolean;
}

export default function Menu({ title, active, href, isDropdown }: MenuProps) {
  if (isDropdown)
    <li>
      <Link className="dropdown-item color-palette-2" href="/member">
        {title}
      </Link>
    </li>;
  return (
    <li className="nav-item my-auto">
      <Link className={`nav-link${active ? " active" : ""}`} href={href || "/"}>
        {title}
      </Link>
    </li>
  );
}
