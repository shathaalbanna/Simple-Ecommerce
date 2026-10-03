import AuthSplitLayout from "@/components/AuthSplitLayout";
import BackLink from "@/components/BackLink";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthSplitLayout image="/images/reset-password.png">
      <BackLink href="/login">Back to login</BackLink>

      <h1 className="mt-6 text-[32px] font-semibold text-neutral-800">
        Forgot your password?
      </h1>
      <p className="mt-4 max-w-[360px] text-sm text-neutral-600">
        Don&apos;t worry, happens to all of us. Enter your email below to
        recover your password
      </p>

      <ForgotPasswordForm />
    </AuthSplitLayout>
  );
}