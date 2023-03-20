import Image from "next/image";
import Input from "../../src/components/atoms/Input";
import Sidebar from "../../src/components/organism/Sidebar";
import { toast } from "react-toastify";
import { getTokenFromCookiesAndDecodeForServer } from "../../config/token";
import { UserTypes } from "../../services/data-types";
import { useState } from "react";

interface EditProfileProps {
  user: UserTypes;
}

export default function EditProfile({ user }: EditProfileProps) {
  const [userProfile, setUserProfile] = useState<UserTypes>(user);
  const [imgPreview, setImgPreview] = useState("");

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files![0];
    setImgPreview(URL.createObjectURL(img));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log({ userProfile });
  };

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="" onSubmit={submitHandler}>
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imgPreview.length > 0 || imgPreview ? (
                      <Image
                        src={imgPreview}
                        width={90}
                        height={90}
                        alt="icon"
                        style={{
                          objectFit: "cover",
                          borderRadius: "100%",
                          objectPosition: "center",
                        }}
                      />
                    ) : (
                      <Image
                        src="/icon/upload.svg"
                        width={90}
                        height={90}
                        alt="icon"
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={imageHandler}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={userProfile.name}
                  onChange={(e) => {
                    setUserProfile({
                      ...userProfile,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={userProfile.email}
                  disabled
                  readOnly
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={userProfile.phoneNumber}
                  onChange={(e) => {
                    setUserProfile({
                      ...userProfile,
                      phoneNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const { tkn } = req.cookies;
  if (!tkn) {
    toast.error("Please login first", {
      position: "top-center",
      theme: "colored",
    });
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const res = await getTokenFromCookiesAndDecodeForServer(tkn);

  if (!tkn || !res) {
    toast.error("Please login first", {
      position: "top-center",
      theme: "colored",
    });
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: res.player,
    },
  };
}
