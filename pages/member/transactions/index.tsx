import Sidebar from "../../../src/components/organism/Sidebar";
import TransactionContent from "../../../src/components/organism/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
