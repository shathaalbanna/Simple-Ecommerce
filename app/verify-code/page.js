import AuthSplitLayout from "@/components/AuthSplitLayout";
import BackLink from "@/components/BackLink";
import VerifyCodeForm from "./components/VerifyCodeForm";

export default function VerifyCodePage() {
  return (
    <AuthSplitLayout image="/images/img.png">
      <BackLink href="/login">Back to login</BackLink>

      <h1 className="mt-6 text-[32px] font-semibold text-neutral-800">
        Verify code
      </h1>
      <p className="mt-4 text-sm text-neutral-600">
        An authentication code has been sent to your email.
      </p>

      <VerifyCodeForm />
    </AuthSplitLayout>
  );
}
