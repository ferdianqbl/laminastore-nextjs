import Image from "next/image";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import { removeTokenFromCookies } from "../../../../config/token";
import { useRouter } from "next/router";
import { useState } from "react";

interface SidebarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "reward"
    | "settings";
}

export default function Sidebar({ activeMenu }: SidebarProps) {
  const router = useRouter();
  const logoutHandler = () => {
    removeTokenFromCookies();
    router.push("/");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview-ic"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="transaction-ic"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="message-ic" />
          <MenuItem title="Card" icon="card-ic" />
          <MenuItem title="Reward" icon="reward-ic" />
          <MenuItem
            title="Settings"
            icon="settings-ic"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <div className="item mb-30">
            <Image
              src="/icon/logout-ic.svg"
              width={25}
              height={25}
              alt="icon"
              className="icon me-3"
            />
            <p className="item-title m-0">
              <a
                type="button"
                className="text-lg text-decoration-none"
                onClick={logoutHandler}
              >
                Log Out
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
