import { useEffect, useState } from "react";
import Menu from "./Menu";
import { getToken } from "../../../../config/token";
import Image from "next/image";
import { JWTPayloadTypes, UserTypes } from "../../../../services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserTypes>({
    id: "",
    avatar: "",
    email: "",
    name: "",
    username: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const payload: JWTPayloadTypes | undefined = getToken();
    if (payload) {
      setUser(payload.player);
      setIsLogin(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    router.push("/");
  };

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
            {user?.avatar ? (
              <Image
                src={`${ROOT_IMG}/player/${user.avatar}`}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            ) : (
              <>
                <Image
                  src="https://source.unsplash.com/random/40x40/?person"
                  className="rounded-circle"
                  width="40"
                  height="40"
                  alt=""
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </>
            )}
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <Menu title="My Profile" href="/member" />
            <Menu title="Wallet" />
            <Menu title="Account Settings" href="/member/edit-profile" />
            <li className="nav-item my-auto">
              <a type="button" className="nav-link" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </li>
    );

  return (
    <li className="nav-item my-auto">
      <a
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/sign-in"
        role="button"
      >
        Sign In
      </a>
    </li>
  );
}
