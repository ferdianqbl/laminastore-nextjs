import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  isPrimary?: boolean;
  className?: string;
}

export default function Button({
  text,
  href,
  isPrimary,
  className,
}: ButtonProps) {
  if (isPrimary)
    return (
      <Link
        className={
          className
            ? className
            : `btn btn-sign-in fw-medium text-lg color-palette-1 text-white rounded-pill mb-16`
        }
        href={href}
        role="button"
      >
        {text}
      </Link>
    );

  return (
    <Link
      className={
        className
          ? className
          : `btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill`
      }
      href={href}
      role="button"
    >
      {text}
    </Link>
  );
}
