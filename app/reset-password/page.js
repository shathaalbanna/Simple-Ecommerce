import AuthSplitLayout from "@/components/AuthSplitLayout";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthSplitLayout image="/images/reset-password.png" fit="cover">
      <h1 className="text-[32px] font-semibold text-neutral-800">
        Set a password
      </h1>
      <p className="mt-4 max-w-[360px] text-sm text-neutral-600">
        Your previous password has been reset. Please set a new password for
        your account.
      </p>

      <ResetPasswordForm />
    </AuthSplitLayout>
  );
}