import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postLogin } from "../../../../services/auth";
import Cookies from "js-cookie";
import { saveTokenToCookies } from "../../../../config/token";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and Password should not be empty", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      const data = {
        email,
        password,
      };

      const result = await postLogin(data);

      if (result.error === 1) {
        toast.error(result.message, {
          position: "top-center",
          theme: "colored",
        });
      } else {
        toast.success("Login Success", {
          position: "top-center",
          theme: "colored",
        });
        const { token } = result.data; // get token
        saveTokenToCookies(token); // save token to cookie
        router.push("/");
      }
    }
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="pt-50">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg color-palette-1 text-white rounded-pill mb-16"
          onClick={submitHandler}
        >
          Continue to Sign In
        </button>
        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-up"
          role="button"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
