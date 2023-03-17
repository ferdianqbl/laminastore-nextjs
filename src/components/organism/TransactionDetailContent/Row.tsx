import { NumericFormat } from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function Row({ label, value, className }: RowProps) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{" "}
      <span className={`purchase-details ${className}`}>
        {typeof value === "number" ? (
          <NumericFormat
            value={value}
            displayType="text"
            prefix="IDR "
            decimalSeparator=","
            thousandSeparator="."
          />
        ) : (
          value
        )}
      </span>
    </p>
  );
}
