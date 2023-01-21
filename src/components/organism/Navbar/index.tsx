import Image from "next/image";
import Menu from "./Menu";
import NavbarToggler from "./NavbarToggler";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image
              src="/icon/logo.svg"
              width={50}
              height={50}
              alt="logo-icon"
            />
          </a>
          <NavbarToggler />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-0 gap-2">
              <Menu title="Home" active />
              <Menu title="Games" />
              <Menu title="Reward" />
              <Menu title="Discover" />
              <Menu title="Global Rank" />
              <li className="nav-item my-auto">
                <a
                  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                  href="./src/sign-in.html"
                  role="button"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
