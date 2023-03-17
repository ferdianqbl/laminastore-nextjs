import { toast } from "react-toastify";
import {
  getTokenFromCookiesAndDecodeForServer,
  getTokenFromCookiesServer,
} from "../../../../config/token";
import Sidebar from "../../../../src/components/organism/Sidebar";
import TransactionDetailContent from "../../../../src/components/organism/TransactionDetailContent";
import {
  TransactionHistoryTypes,
  UserTypes,
} from "../../../../services/data-types";
import { getDetailTransaction } from "../../../../services/member";

interface TransactionDetailProps {
  transactionDetail: TransactionHistoryTypes;
}

export default function TransactionsDetail({
  transactionDetail,
}: TransactionDetailProps) {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

export async function getServerSideProps({
  req,
  params,
}: {
  req: any;
  params: any;
}) {
  const { tkn } = req.cookies;
  const { transactionId } = params;
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

  // decode token
  const token = getTokenFromCookiesServer(tkn);

  const payload = getTokenFromCookiesAndDecodeForServer(tkn);
  const user: UserTypes = payload.player;

  if (user.avatar)
    user.avatar = `${process.env.NEXT_PUBLIC_ROOT_IMG}/player/${user.avatar}`;
  else user.avatar = "https://source.unsplash.com/random/40x40/?person";

  const result = await getDetailTransaction(transactionId, token);

  return {
    props: {
      user,
      transactionDetail: result.data,
    },
  };
}
