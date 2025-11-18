'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserRole } from '@/shared/types/user.types';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  requireApprovedSeller?: boolean;
}

export function AuthGuard({ 
  children, 
  allowedRoles,
  requireApprovedSeller = false 
}: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      // Not authenticated
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      // Check role
      if (allowedRoles && user && !allowedRoles.some(role => user.roles.includes(role))) {
        router.push('/');
        return;
      }

      // Check seller approval
      if (requireApprovedSeller && !user?.roles.includes('SELLER')) {
        router.push('/seller/pending-approval');
        return;
      }
    }
  }, [isAuthenticated, user, user?.roles, isLoading, allowedRoles, requireApprovedSeller, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}