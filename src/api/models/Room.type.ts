export interface Room {
  id: number;
  imageUrl: string;
  productList: Product[];
}

export interface Product {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}
