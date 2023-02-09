import Sidebar from "../../../src/components/organism/Sidebar";
import TransactionsContent from "../../../src/components/organism/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
