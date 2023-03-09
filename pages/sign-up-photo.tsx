import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CategoryTypes } from "../services/data-types";
import { getGameCategories } from "../services/player";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");

  const getAllCategories = useCallback(async () => {
    const result = await getGameCategories();
    setCategories(result);
    setFavorite(result[0]._id);
  }, [getGameCategories]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ favorite });
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
                      src="/icon/upload.svg"
                      alt="upload"
                      width={120}
                      height={120}
                      priority
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                Shayna Anne
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                shayna@anne.com
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
    </section>
  );
}
