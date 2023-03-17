interface ButtonTabProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export default function ButtonTab({ title, active, onClick }: ButtonTabProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-status rounded-pill text-sm me-3 ${
        active ? "btn-active" : ""
      }`}
    >
      {title}
    </button>
  );
}
