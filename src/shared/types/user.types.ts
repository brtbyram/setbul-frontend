export type UserRole = 'BUYER' | 'SELLER' | 'ADMIN' | 'COACH' | 'STUDENT';
export type SellerStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'SUSPENDED';


export interface User {
  id: string;
  email: string;
  roles: UserRole[];
}

export interface Seller {
  id: string;
  userId: string;
  shopName: string;
  shopUrl?: string;
  logo?: string;
  phone: string;
  status: SellerStatus;
  verified: boolean;
  rating: number;
  totalReviews: number;
}

export interface AuthResponse {
    id: string;
  email: string;
  roles: string[];
}

export type AuthUser = AuthResponse;
