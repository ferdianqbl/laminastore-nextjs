interface ButtonTabProps {
  title: string;
  dataFilter: "all" | "success" | "pending" | "failed";
  active?: boolean;
}

export default function ButtonTab({
  title,
  dataFilter,
  active,
}: ButtonTabProps) {
  return (
    <button
      data-filter={dataFilter}
      // href="#"
      className={`btn btn-status rounded-pill text-sm me-3 ${
        active ? "btn-active" : ""
      }`}
    >
      {title}
    </button>
  );
}
