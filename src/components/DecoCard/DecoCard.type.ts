export interface DecoCardProps {
  className?: string;
  thunmNailSrc: string;
  productName: string;
  price: number;
  discountRate: number;
  outside: boolean;
  direction: 'br' | 'bl' | 'tr' | 'tl';
}
