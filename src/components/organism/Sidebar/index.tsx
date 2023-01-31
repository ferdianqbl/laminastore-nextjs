import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview-ic" active />
          <MenuItem title="Transactions" icon="transaction-ic" />
          <MenuItem title="Messages" icon="message-ic" />
          <MenuItem title="Card" icon="card-ic" />
          <MenuItem title="Reward" icon="reward-ic" />
          <MenuItem title="Settings" icon="settings-ic" />
          <MenuItem title="Log Out" icon="logout-ic" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
