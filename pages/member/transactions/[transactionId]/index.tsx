import { toast } from "react-toastify";
import { getTokenFromCookiesAndDecodeForServer } from "../../../../config/token";
import Sidebar from "../../../../src/components/organism/Sidebar";
import TransactionDetailContent from "../../../../src/components/organism/TransactionDetailContent";
import { UserTypes } from "../../../../services/data-types";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
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
  const payload = getTokenFromCookiesAndDecodeForServer(tkn);
  const user: UserTypes = payload.player;

  if (user.avatar)
    user.avatar = `${process.env.NEXT_PUBLIC_ROOT_IMG}/player/${user.avatar}`;
  else user.avatar = "https://source.unsplash.com/random/40x40/?person";

  return {
    props: {
      user,
    },
  };
}
