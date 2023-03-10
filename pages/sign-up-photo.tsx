import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { postSignUp } from "../services/auth";
import { CategoryTypes } from "../services/data-types";
import { getGameCategories } from "../services/player";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function SignUpPhoto() {
  const [localForm, setLocalForm] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");

  const router = useRouter();

  const getAllCategories = useCallback(async () => {
    const result = await getGameCategories();
    setCategories(result.data);
    setFavorite(result.data[0]._id);
  }, [getGameCategories]);

  const getLocalForm = async () => {
    const localData: string | null = await localStorage.getItem("user-form");
    const dataUser = JSON.parse(localData as string);
    setLocalForm(dataUser);
  };

  useEffect(() => {
    getAllCategories();
    getLocalForm();
  }, []);

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files![0];
    setImagePreview(URL.createObjectURL(img));
    setImage(img);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    // data.append("image", image!);
    data.append("name", localForm.name);
    data.append("username", localForm.username);
    data.append("email", localForm.email);
    data.append("phoneNumber", localForm.phoneNumber);
    data.append("password", localForm.password);
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await postSignUp(data);

    if (result.error === 1) {
      toast.error(result.message, {
        theme: "colored",
      });
      setTimeout(() => {
        localStorage.removeItem("user-form");
        router.push("/sign-up");
      }, 3000);
    } else {
      localStorage.removeItem("user-form");
      toast.success("Register Success", {
        theme: "colored",
      });
      router.push("/sign-up-success");
    }
  };

  return (
    <section className="sign-up-photo mx-auto">
      <div className="container mx-auto">
        <form action="" onSubmit={submitHandler}>
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      alt="upload"
                      width={120}
                      height={120}
                      priority
                      style={{ objectFit: "cover", borderRadius: "100%" }}
                    />
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
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {categories.map((item: CategoryTypes) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="submit"
              >
                Create My Account
              </button>
              <Link
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </section>
  );
}
