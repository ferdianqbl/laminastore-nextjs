import Sidebar from "../../../../src/components/organism/Sidebar";
import TransactionDetailContent from "../../../../src/components/organism/TransactionDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
}
