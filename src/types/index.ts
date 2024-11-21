export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  weight: number;
  stock: number;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  characteristics?: {
    glutenFree: boolean;
    vegan: boolean;
    sugarFree: boolean;
    lactoseFree: boolean;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'editor';
  permissions: string[];
}

export type CardType = 'visa' | 'mastercard' | 'amex' | 'elo' | 'hipercard';