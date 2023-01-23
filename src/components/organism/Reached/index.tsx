import { Fragment } from "react";
import ReachedItem from "./ReachedItem";

const items: { number: string; title: string }[] = [
  {
    number: "290M+",
    title: "Players Top Up",
  },
  {
    number: "12.500",
    title: "Games Available",
  },
  {
    number: "99,9%",
    title: "Happy Players",
  },
  {
    number: "4.7",
    title: "Rating Worldwide",
  },
];

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-lg-0 gap-4">
          {items.map((item, index) =>
            index < items.length - 1 ? (
              <Fragment key={item.number + item.title}>
                <ReachedItem number={item.number} title={item.title} />
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
              </Fragment>
            ) : (
              <ReachedItem
                number={item.number}
                title={item.title}
                key={item.number + item.title}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
