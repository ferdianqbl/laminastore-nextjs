import Image from "next/image";
import AuthForm from "../src/components/organism/AuthForm";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <a className="navbar-brand" href="../index.html">
              <Image src="/icon/logo.svg" alt="Logo" width={60} height={60} />
            </a>
          </div>
          <AuthForm
            title="Sign Up"
            subtitle="Daftar dan bergabung dengan kami"
          />
        </form>
      </div>
    </section>
  );
}
