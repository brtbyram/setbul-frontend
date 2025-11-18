'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading, refetch } = useAuth();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (!user) return null;

  return <>{children}</>;
}
