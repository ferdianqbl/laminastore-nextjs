import { toast } from "react-toastify";
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

export async function getServerSideProps({ req }: { req: any }) {
  const { tkn } = req.cookies;
  if (!tkn) {
    toast.error("Please login first", {
      position: "top-center",
      theme: "colored",
    });
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
