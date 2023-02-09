import OverviewContent from "../../src/components/organism/OverviewContent";
import Sidebar from "../../src/components/organism/Sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
