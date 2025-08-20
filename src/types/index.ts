export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: 'kg' | 'bag' | 'piece';
  category: ProductCategory;
  image: string;
  specifications: string[];
  inStock: boolean;
}

export type ProductCategory = 
  | 'exterior-facade'
  | 'interior-finishing'
  | 'quick-drying'
  | 'paint-coating'
  | 'cement'
  | 'bricks';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  deliveryAddress: string;
  phone: string;
  status: OrderStatus;
  createdAt: Date;
  deliveryOption: 'city' | 'province';
  paymentMethod: 'online' | 'cod';
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
}
