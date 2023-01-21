import Menu from "./Menu";

export default function Auth({ isLogin }: { isLogin?: boolean }) {
  if (isLogin)
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <Menu title="My Profile" isDropdown href="/member" />
            <Menu title="Wallet" isDropdown />
            <Menu
              title="Account Settings"
              isDropdown
              href="/member/edit-profile"
            />
            <Menu title="Log Out" isDropdown href="/sign-in" />
          </ul>
        </div>
      </li>
    );

  return (
    <li className="nav-item my-auto">
      <a
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="./src/sign-in.html"
        role="button"
      >
        Sign In
      </a>
    </li>
  );
}
