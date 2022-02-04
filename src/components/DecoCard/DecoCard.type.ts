export interface DecoCardProps {
  className?: string;
  $display: boolean;
  thunmNailSrc: string;
  productName: string;
  price: number;
  discountRate: number;
  outside: boolean;
  direction: 'br' | 'bl' | 'tr' | 'tl';
}
