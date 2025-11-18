"use client";

import { useCurrentUserQuery } from "@/features/auth/hooks/useCurrentUser";


export default function AdminDashboard() {
  const { data: user, isLoading } = useCurrentUserQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return <h1>Welcome {user.email}</h1>;
}
