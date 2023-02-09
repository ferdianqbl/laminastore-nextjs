interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function Row({ label, value, className }: RowProps) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}
