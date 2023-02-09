import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

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
          <MenuItem title="Log Out" icon="logout-ic" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
