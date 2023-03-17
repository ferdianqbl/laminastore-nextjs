import Image from "next/image";
import Link from "next/link";
import CheckoutConfirmation from "../src/components/organism/CheckoutConfirmation";
import CheckoutDetail from "../src/components/organism/CheckoutDetail";
import CheckoutItem from "../src/components/organism/CheckoutItem";
import { getTokenFromCookiesAndDecodeForServer } from "../config/token";
import { UserTypes } from "../services/data-types";
import { toast } from "react-toastify";

export default function checkout({ user }: { user: UserTypes }) {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link className="" href="/">
            <Image
              src="/icon/logo.svg"
              width={60}
              height={60}
              alt="logo-icon"
            />
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const { tkn } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(tkn);

  if (!tkn || !payload) {
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
