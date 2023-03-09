import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form action="">
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="pt-50">
        <label
          htmlFor="username"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Username
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Enter your username"
        />
      </div>
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
        />
      </div>
      <div className="pt-50">
        <label
          htmlFor="phoneNumber"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control rounded-pill text-lg"
          id="phoneNumber"
          name="phoneNumber"
          aria-describedby="phoneNumber"
          placeholder="Enter your Phone Number"
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
          placeholder="Enter your password address"
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="submit"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
        >
          Continue
        </button>
        <Link
          href="/sign-in"
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}
