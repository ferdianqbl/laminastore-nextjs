import Image from "next/image";
import RegisterForm from "../src/components/organism/RegisterForm";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <div className="pb-50">
          <a className="navbar-brand" href="/">
            <Image src="/icon/logo.svg" alt="Logo" width={60} height={60} />
          </a>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
