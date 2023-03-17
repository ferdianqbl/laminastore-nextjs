import { useCallback, useEffect, useState } from "react";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";
import { getMemberTransactions } from "../../../../services/member";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";
import { TransactionHistoryTypes } from "../../../../services/data-types";

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;

  const getAllMemberTransaction = useCallback(async () => {
    const result = await getMemberTransactions();
    if (result.error) {
      toast.error(result.message, {
        position: "top-center",
        theme: "colored",
      });
    } else {
      console.log(result.data);
      setTotal(result.data.total_value);
      setData(result.data.data);
    }
  }, [getMemberTransactions]);

  useEffect(() => {
    getAllMemberTransaction();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumericFormat
              value={total}
              displayType="text"
              prefix="IDR "
              decimalSeparator=","
              thousandSeparator="."
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab title="All Trx" dataFilter="all" active />
              <ButtonTab title="Success" dataFilter="success" />
              <ButtonTab title="Pending" dataFilter="pending" />
              <ButtonTab title="Failed" dataFilter="failed" />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {data.map((item: TransactionHistoryTypes) => (
                  <TableRow
                    key={item._id}
                    image={`${ROOT_IMG}/voucher/${item.voucherTopupHistory.thumbnail}`}
                    title={item.voucherTopupHistory.gameName}
                    category={item.voucherTopupHistory.category}
                    item={`${item.voucherTopupHistory.coinQuantity} ${item.voucherTopupHistory.coinName}`}
                    price={item.value}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
