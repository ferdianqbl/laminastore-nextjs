import { useCallback, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import TableRow from "./TableRow";
import { getDashboard } from "../../../../services/member";
import { toast } from "react-toastify";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getDashboardData = useCallback(async () => {
    const result = await getDashboard();
    if (result.error)
      toast.error(result.message, {
        position: "top-center",
        theme: "colored",
      });
    else {
      setCount(result.data.count_category_value);
      setData(result.data.data);
    }
  }, [getDashboard]);

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: any) => (
                <CategoryCard icon="ic-desktop" nominal={item.value}>
                  Game
                  <br />
                  {item.name}
                </CategoryCard>
              ))}
              {/* <CategoryCard icon="ic-desktop" nominal={5000000}>
                Other
                <br />
                Categories
              </CategoryCard> */}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legends: The New Battle 2021"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call of Duty:Modern"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="success"
                />
                <TableRow
                  image="overview-3"
                  title="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="failed"
                />
                <TableRow
                  image="overview-4"
                  title="The Royal Game"
                  category="Mobile"
                  item={225}
                  price={200000}
                  status="pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
