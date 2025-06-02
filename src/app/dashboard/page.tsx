import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import SignOutButton from "./components/sign-out-button";
import { redirect } from "next/navigation";

const dashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
      <SignOutButton />
    </div>
  );
};

export default dashboardPage;
