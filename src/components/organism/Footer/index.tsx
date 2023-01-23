import Image from "next/image";
import Link from "next/link";

const companyItems: { title: string; href: string }[] = [
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Press Release",
    href: "/",
  },
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy & Policy",
    href: "/",
  },
];

const supportItems: { title: string; href: string }[] = [
  {
    title: "Refund Policy",
    href: "/",
  },
  {
    title: "Unlock Rewards",
    href: "/",
  },
  {
    title: "Live Chatting",
    href: "/",
  },
];

const connectItems: { title: string; href: string }[] = [
  {
    title: "hi@store.gg",
    href: "mailto: team@store.gg",
  },
  {
    title: "team@store.gg",
    href: "mailto: team@store.gg",
  },
  {
    title: "Pasific 12, Jakarta Selatan",
    href: "http://maps.google.com/?q=Pasific 12, Jakarta Selatan",
  },
  {
    title: "021 - 1122 - 9090",
    href: "tel: 02111229090",
  },
];

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    {companyItems.map((item) => (
                      <li className="mb-6" key={item.href + item.title}>
                        <Link
                          className="text-lg color-palette-1 text-decoration-none"
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <ul className="list-unstyled">
                      {supportItems.map((item) => (
                        <li className="mb-6" key={item.href + item.title}>
                          <Link
                            className="text-lg color-palette-1 text-decoration-none"
                            href={item.href}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <ul className="list-unstyled">
                      {connectItems.map((item) => (
                        <li className="mb-6" key={item.href + item.title}>
                          <Link
                            className="text-lg color-palette-1 text-decoration-none"
                            href={item.href}
                            target="_blank"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
