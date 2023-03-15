import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../../services/data-types";
import { getToken } from "../../../../config/token";
import Image from "next/image";

export default function Profile() {
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;
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
    setUser(payload!.player);
  }, []);
  return (
    <div
      className="user text-centerstrokeWidth pb-50 pe-30"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user.avatar ? (
        <Image
          alt="avatar"
          src={`${ROOT_IMG}/player/${user.avatar}`}
          width="90"
          height="90"
          className="img-fluid mb-20 rounded-circle"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      ) : (
        <Image
          alt=""
          src="https://source.unsplash.com/random/90x90/?person"
          width="90"
          height="90"
          className="img-fluid mb-20 rounded-circle"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}

      <h2 className="fw-bold text-xl color-palette-1 m-0 text-center">
        {user.name}
      </h2>
      <h2 className="text-xl color-palette-1 m-0 text-center">
        {user.username}
      </h2>
      <p className="color-palette-2 m-0 text-center">{user.email}</p>
    </div>
  );
}
