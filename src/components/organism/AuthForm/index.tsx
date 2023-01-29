import Button from "./Button";
import Field from "./field";

interface AuthFormProps {
  title: string;
  subtitle: string;
  isSignIn?: boolean;
}

export default function AuthForm({ title, subtitle, isSignIn }: AuthFormProps) {
  if (isSignIn)
    return (
      <>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">{title}</h2>
        <p className="text-lg color-palette-1 m-0">{subtitle}</p>
        <Field
          title="Email Address"
          label="email"
          type="email"
          id="email"
          name="email"
          ariaDescribedby="email"
          placeholder="Enter your email address"
        />

        <Field
          title="Password"
          label="password"
          type="password"
          id="password"
          name="password"
          ariaDescribedby="password"
          placeholder="Enter your password"
        />

        <div className="button-group d-flex flex-column mx-auto pt-50">
          <Button href="/" text="Continue to Sign In" isPrimary />
          <Button href="/sign-up" text="Sign Up" />
        </div>
      </>
    );
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">{title}</h2>
      <p className="text-lg color-palette-1 m-0">{subtitle}</p>
      <Field
        title="Full Name"
        label="name"
        type="text"
        id="name"
        name="name"
        ariaDescribedby="name"
        placeholder="Enter your name"
      />

      <Field
        title="Email Address"
        label="email"
        type="email"
        id="email"
        name="email"
        ariaDescribedby="email"
        placeholder="Enter your email address"
      />

      <Field
        title="Password"
        label="password"
        type="password"
        id="password"
        name="password"
        ariaDescribedby="password"
        placeholder="Enter your password"
      />

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Button
          href="/sign-up-photo"
          text="Continue"
          isPrimary
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
        />
        <Button
          href="/sign-in"
          text="Sign In"
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
        />
      </div>
    </>
  );
}
