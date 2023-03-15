import Image from "next/image";
import { NumericFormat } from "react-number-format";

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
}

export default function TableRow({
  image,
  title,
  category,
  item,
  price,
  status,
}: TableRowProps) {
  return (
    <tr className="align-middle">
      <th scope="row" className="d-flex align-items-center">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width={80}
          height={60}
          alt="game thumb"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "min-content",
            width: "min-content",
          }}
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumericFormat
            value={price}
            displayType="text"
            prefix="IDR "
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
      </td>
    </tr>
  );
}
