"use client";

import { useSession } from "next-auth/react";

export function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session?.user?.name}
        </p>
      </div>
    </div>
  );
}